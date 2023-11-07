import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from 'react'; 
import cookie from "js-cookie";
import "../../public/js/jquery.min.js";
import "../../public/css/bootstrap.min.css";
import "../../public/css/all.css";
import "../../public/css/main.css";
import "../../public/css/demo.css";

import "../../public/css/pe-icon-7-stroke.css";
// import "../../public/js/bootstrap-table.js";

import { withRouter } from "next/router";
import AppContextProvider from "../contexts/AppContextProvider";

const wrapErrorBoundary = (children) => {
  if (process.env.NODE_ENV !== "production") {
    return children;
  }
  return <ErrorBoundary>{children}</ErrorBoundary>;
};
function MyApp({ Component, pageProps, ctxReqHeaders }) {
  useEffect(() => {
    if (cookie.get('lang') == 'en') {
      document.body.classList.remove('ar');
      document.body.classList.add('en');
    } 
    if (cookie.get('lang') == 'ar') {
      document.body.classList.remove('en');
      document.body.classList.add('ar');
    } 

  }, [cookie.get('lang')]);
  return (
    <AppContextProvider ctxReqHeaders={ctxReqHeaders} pageProps={pageProps}>
      <Component {...pageProps} />
      {/* <ToastContainer /> */}
    </AppContextProvider>
  );
}
export default withRouter(MyApp);
