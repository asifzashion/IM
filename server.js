const axios = require('axios')
const betaEnv = require('./config-enviroments/beta.config')
const productionEnv = require('./config-enviroments/production.config')
const proxy = require('express-http-proxy');

const fs = require('fs').promises;
const path = require('path');
const fetch = require('isomorphic-unfetch');

const express = require("express");
const next = require("next");
const {resolve: urlResolve} = require("url");
const cookieParser = require("cookie-parser");
const cacheableResponse = require('cacheable-response')
const Keyv = require('keyv');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();
const cacheStore = new Keyv({namespace: 'ssr-cache'});
const noCache = true
const hasAppServerLogDisabled = !!dev;

let envConfig = productionEnv;
switch (process.env.CONFIG_PROFILE) {
    case 'beta':
        envConfig = betaEnv;
        break;
}
process.env = {...envConfig, ...process.env};





const renderHandler = async ({req, res, pagePath, queryParams = {}}) => {
    if (dev || req.query.noCache || noCache) {
        const data = await app.renderToHTML(req, res, pagePath, queryParams)
        const isOopsFound = !data || data.indexOf('<title>Oops</title>') > -1;
        console.log('isOopsFound', isOopsFound)

        if (isOopsFound) {
            res.status(res.statusCode || 500);
        }
        setTimeout(() => {
            console.log('renderHandler:', `isOops:${isOopsFound}`, 'Query:', req.query, 'path:', pagePath);
        }, 100)
        return res.send(data);
    } else {
        cacheManager({req, res, pagePath, queryParams});
    }
}



function debugLog(req, res) {

    if (hasAppServerLogDisabled)
        return

    const requestStart = Date.now();
    const {method, url} = req;
    console.log(
        JSON.stringify({
            "request_id": req.id,
            'type': 'request',
            timestamp: Date.now(),
            /*httpVersion,*/
            method,
            url
        })
    );
    const {statusCode, statusMessage} = res;

    res.on("finish", () => {
        console.log(
            JSON.stringify({
                "request_id": req.id,
                'type': 'response',
                timestamp: Date.now(),
                processingTime: Date.now() - requestStart,
                statusCode,
                statusMessage,
                /*headers,*/
                url
            })
        )
    })
    res.on("error", error => {
        console.error(
            JSON.stringify({
                "request_id": req.id,
                'type': 'res_error',
                statusCode,
                url,
                errorMessage: error.message
            })
        )
    });

}



const checkWrongUrls = (req, res, next) => {
    if (req.url.indexOf('//') > -1) {
        return res.redirect(req.url.replace(/\/\//, '/'));
    }
    next()
};

const rootStaticFiles = async (req, res, next) => {
    const conditions = ['favicon.ico', 'apple-app-site-association', 'robots.txt', 'sw.js', 'worker.js',
        (name) => name.match(/(workbox|worker|fallback)-\w+\.js$/)]
    const basename = path.basename(req.url);
    const isStaticFile = (fileName) => {
        for (let cond of conditions) {
            if (typeof cond === 'string') {
                if (fileName === cond) return true;
            } else if (typeof cond === 'function') {
                if (cond(fileName))
                    return true;
            }
        }
        return false;
    };
    const getContentType = fileName => {
        if (fileName.indexOf('.html') > -1)
            return 'text/html';
        if (fileName.indexOf('.ico') > -1)
            return 'image/x-icon';
        if (fileName.indexOf('.json') > -1)
            return 'application/json;charset=UTF-8';
        if (fileName.indexOf('.js') > -1)
            return 'text/javascript;charset=UTF-8';
        return 'text/plain;charset=UTF-8';
    };
    if (isStaticFile(basename)) {
        return res.status(200).sendFile(basename, {
            root: __dirname + '/public/',
            headers: {
                'Content-Type': getContentType(basename),
            }
        })
    }
    next()
};

const extractSeoParams = splitterSuffixes => (req, res, next) => {
    const seoParams = {};

    splitterSuffixes.forEach(suffix => {
        if (Object.keys(seoParams).length > 0) return;
        const seoParamsString = req.url.split(suffix);
        if (seoParamsString.length > 1) {
            let key = '';
            seoParamsString[1].split('/').forEach(valueOrKey => {
                if (key)
                    seoParams[key] = valueOrKey;
                else
                    key = valueOrKey;
            });
        }
    });

    req.query = {...seoParams, ...req.query};
    next();
};




app.prepare().then(() => {
    const server = express();
    server.use(cookieParser());

    server.use('/local-proxy/', proxy( (req)=>{
        const proxyHost =req.url.substring(1,9999).match(/(https?:\/\/[^\/]+)/)[0];
        req.proxyHost = proxyHost;
        return proxyHost;
    },{
        proxyReqPathResolver: (req) =>{
            const endpoint =req.url.substring(1,9999).replace(req.proxyHost,'');
            return endpoint;
        }
    }));
    server.get("/", (req, res) => {//todo handle main page
        debugLog(req, res)
        return renderHandler({ req, res, pagePath: '/', queryParams: req.query })
    });
    server.get("/dashboard", (req, res) => {//todo handle main page
        debugLog(req, res)
        return renderHandler({ req, res, pagePath: '/dashboard', queryParams: req.query })
    });
    server.get("*", (req, res) => {
        const isStaticFile = req.url.match(/\.(js|css|jpg|png|jpeg|svg|woff|gif|ico|ttf|eot|otf)/) || req.url.match(/hmr/);
        if (isStaticFile) {
            return handle(req, res);
        }
        res.statusCode = 404;
        return renderHandler({req, res, pagePath: "/oops", queryParams: {noCache: 1, ...req.query}});
        debugLog(req, res)
    });


    server.listen(port, "0.0.0.0", err => {
        if (err) throw err;
        console.log(`> Ready on http://0.0.0.0:${port}`);
    });


}).catch(e =>console.error('App Prepare Error',e));



process.on("uncaughtException", (err) => {
    console.log("uncaughtException", err);
});
