//import fs from 'fs';
export const debounce = (func, delay) => {
    let inDebounce;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
};

export const alertSafe = (txt) => {
    typeof window !== 'undefined' && alert(txt);
};

export const getCurrentPathname = () => {
    return (typeof window === "undefined" ? {location: {pathname: ''}} : window).location.pathname
};

export const getCurrentQS = () => {
    return (typeof window === "undefined" ? {location: {search: ''}} : window).location.search
};

export const sortAddressObjItems = (data, attr) => {
    let arr = [];
    for (let prop in data) {
        if (data.hasOwnProperty(prop)) {
            let obj = {};
            obj[prop] = data[prop];
            obj.tempSortName = parseInt(data[prop][attr], 10);
            arr.push(obj);
        }
    }
    arr.sort(function (a, b) {
        let at = a.tempSortName,
            bt = b.tempSortName;
        return at > bt ? 1 : (at < bt ? -1 : 0);
    });

    let result = [];
    for (let i = 0, l = arr.length; i < l; i++) {
        let obj = arr[i];
        delete obj.tempSortName;
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var id = prop;
            }
        }
        let item = obj[id];
        if (item[attr] !== false) {
            result.push(item);
        }
    }
    return result;
};

export const excludeAddressObjItems = (data, attr) => {
    data && data.length>0 && data.map(function (item) {
        for (let i = 0; i < attr.length; i++) {
            if (item.hasOwnProperty(attr[i])) {
                console.log(attr[i])
                let object = attr[i];
                delete item.object;
            }
        }
        return item;
    });
};
export const imagePath = (src, {width = 150, height = 150} = {width: 150, height: 150}) => {
    if (!src) return '';
    if (src.match(/^(https?:)?\/\//)) return src;
    return `${process.env.CDN}/cdn-cgi/image/width=${width},height=${height}/media/catalog/product/${src}`;
};

export const classNames = (firstClass, classes = {}) => {
    classes = {...(typeof firstClass === 'string' ? {[firstClass]: true} : firstClass), ...classes};
    return Object.keys(classes).filter(k => classes[k]).join(" ");
};
export const strLimit = function(text,length) {
    return text?.length > length ? (text.substring(0, length) + '...') : text;
}

export const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export const validnumberRegex = /^\s*-?[0-9]{8,10}$/;

export const validRegexWithoutLength = /^\s*-?[0-9]$/;

export const float = str => {
    let n;
    if (str === undefined) {
        n = 0
    } else n = parseFloat(str);
    if (isNaN(n)) {
        n = 0;
    }
    return n;
};


export const int = str => {
    if (str === undefined) return 0;
    const n = parseInt(str);
    if (isNaN(n)) {
        return 0;
    }
    return n;
};


export const slugify = (str, {replacement = '-', remove = /[*+~.()'"!:@&\/ ]/g, lower = true} = {
    replacement: '-',
    remove: /[*+~.()'"!:@#&\/ ]/g,
    lower: true
}) => {
    if (!str) return 'no-text';
    str = str.replace(remove, replacement).replace(/\s/g, replacement).replace(/--/g, '-');
    return str;
};


export const getStatusCodeFromResponse = (response) => {
    if (response.status && response.status.httpStatusCode) {
        return response.status.httpStatusCode
    } else if (response.status) {
        return response.status
    } else {
        return 200 // if status key not found considering it as success response
    }
};

export const slugifyProduct = (item, query = {}) => {
    let {slug} = item;
    const producturl = item.productUrl || item.url;
    if (!slug && producturl) {
        slug = producturl.split('/').slice(-2).join('/');
    }
    if (slug) {
        const extra = [
            query.tvId && `tvId/${query.tvId}`,
            query.cid && `cid/${query.cid}`,
            query.ruleId && `ruleId/${query.ruleId}`,
            query.id && `id/${query.id}`,
        ].filter(Boolean).join('/');
        return `${slug}${extra}`;
    }
    const id = item.entity_id || item.entityId;
    slug = slugify(item.label || item.name);
    slug = slug.replace(/\/p/, '');
    slug = slug.replace(/\/$/, '');
    if (slug.indexOf(' ') > -1) {
        slug = slugify(slug);
    }
    return `${slug}/${id}/p`;
};

export const slugifyTv = (item) => {
    let {slug, id} = item;
    if (!slug) {
        if (id && isNaN(id)) {
            slug = id;
        } else {
            slug = slugify(item.name);
        }
    }
    slug = slug.replace(/\/tv/, '');
    slug = slug.replace(/\/$/, '');
    if (slug.indexOf(' ') > -1) {
        slug = slugify(slug);
    }
    return `${slug}/tv/`;
};


export const logToFile = (key, obj) => {
    if (typeof window === 'undefined') {
        const str = JSON.stringify(obj);
        const data = `date:${Date.now()}\n-------${key}-----------\n${str || 'No Data'}\n`;
        const path = require('path');
        //const file_name = path.join(__dirname, '../../logs/trace.txt');
        const file_name = '/Users/aminshoman/projects/boutiqaat-revamp-web-app/logs/trace.txt';
        console.log('file_name', file_name)
        const fs = require('fs');
        fs.appendFileSync(file_name, data);
    }
}
export const handlexyPadding = (horizontalPadding, verticalPadding) => {
    let class_name = '';
    if(verticalPadding && horizontalPadding){
        class_name = ' pb-3 '
    }else if(!verticalPadding && !horizontalPadding){
        class_name = ' no-innerpadding '
    }else if(verticalPadding && !horizontalPadding){
        class_name = ' pb-3 no-innerpadding '
    }else if(!verticalPadding && horizontalPadding){
        class_name = ' '
    }

    return class_name;
};
export const handlexyPaddingHomeSlider = (horizontalPadding, verticalPadding) => {
    let class_name = '';
    if(verticalPadding){
        class_name = ' pb-3 '
    }else{
        class_name = ' '
    }

    return class_name;
};

export const handlexyCelebrityPadding = (horizontalPadding, verticalPadding) => {
    let class_name = '';
    if(verticalPadding && horizontalPadding){
        class_name = ' pb-3'
    }else if(!verticalPadding && !horizontalPadding){
        class_name = ' no-innerpadding no-paddingtop-celebrity'
    }else if(verticalPadding && !horizontalPadding){
        class_name = ' pb-3 padding-vt-hf no-innerpadding'
    }else if(!verticalPadding && horizontalPadding){
        class_name = '  no-paddingtop-celebrity' // padding-vf-ht  padding-vt-hf
    }
    return class_name;
};
export const isCarouselStatus = (isCR) => {
    let class_name = '';
      if(isCR){
          class_name=' horizontal-scroll '
      }
    return class_name;
};


export const getSessionObject = (keyName, defaultObject = {}) => {
    if (typeof window === 'undefined') return defaultObject;
    const jsonText = sessionStorage.getItem(keyName);
    if (!jsonText) return defaultObject;
    let json;
    try {
        json = JSON.parse(jsonText);
    } catch (e) {
        json = defaultObject
    }
    return json;
}

export const setSessionObject = (keyName, object) => {
    if (typeof window === 'undefined') return;
    sessionStorage.setItem(keyName, JSON.stringify(object));
}
