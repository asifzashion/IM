import React, { useState } from "react";
import Head from 'next/head';
import $ from 'jquery';

const Footer = () => {

    return (
            <React.Fragment>
      <footer classNane="footer">
                                        <div classNane="container-fluid">

                                            <p classNane="copyright pull-right">
                                                &copy; Ashghal
                                            </p>
                                        </div>
                                    </footer>
        <Head>
        <script src='../../../js/jquery.min.js'></script>
        <script src='../../../js/bootstrap.min.js'></script>
        <script src='../../../js/main.js'></script>


    </Head>
    </React.Fragment>
    )
}
export default Footer;