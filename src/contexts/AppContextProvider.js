import React, {useEffect, useState} from 'react';
import useAuthReducer from "./useAuthReducer";
export const AppContext = React.createContext(null);

export default function AppContextProvider({children, ctxReqHeaders, pageProps}) {

    const auth = useAuthReducer(ctxReqHeaders);
    if (typeof window !== "undefined") {
        // window.wishList = wishList;
        // window.cart = cart;
        // window.checkout = checkout;
        window.auth = auth;
        // window.seo = seo;
        // window.mobileMenu = mobileMenu;
        // window.currentProductActions = currentProductActions;
        window.context = {auth};
    }

    return <AppContext.Provider value={{auth}}>
       
            {children}
        
    </AppContext.Provider>;

}
