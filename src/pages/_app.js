import '../../public/css/bootstrap.min.css'
import '../../public/css/all.css'
import '../../public/css/main.css'
import '../../public/css/pe-icon-7-stroke.css'

import {Router, withRouter} from 'next/router'
import AppContextProvider from '../contexts/AppContextProvider';

const wrapErrorBoundary = (children) => {
    if (process.env.NODE_ENV !== "production") {
        return children;
    }
    return <ErrorBoundary>
        {children}
    </ErrorBoundary>
}
 function MyApp({ Component, pageProps,ctxReqHeaders }) {
    
    return( 
        <AppContextProvider ctxReqHeaders={ctxReqHeaders} pageProps={pageProps}>
           <Component {...pageProps } />
        </AppContextProvider>
    )
}
export default withRouter(MyApp)