import React, { useState } from "react";
import Head from "next/head";
import $ from "jquery";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <p className="copyright pull-right">&copy; Ashghal</p>
        </div>
      </footer>
      <Head>
        <script src="../../../js/jquery.min.js"></script>
        <script src="../../../js/bootstrap.min.js"></script>
        <script src="../../../js/demo.js"></script>
      </Head>
    </React.Fragment>
  );
  
};

export default Footer;
