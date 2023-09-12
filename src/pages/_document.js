import React from 'react';
import Document, {Head, Main, NextScript, Html} from 'next/document';


export default class BTQDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body className={`sidebar-mini`}>
                <div className={`lang-wrapper`}>
                    <Main/>
                    <NextScript/>
                </div>
                </body>
            </Html>
        );
    }
}
