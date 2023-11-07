import React, { useState } from "react";
import Head from "next/head";
import $ from "jquery";

const Footer = () => {
  const handleChangeBG = (event, imageName) => {
    event.stopPropagation();
    document.getElementById("navBG").style.backgroundImage=`url('${imageName}')`;  
  }
  const handleChangeBG2 = (event, imageName) => {
    event.stopPropagation();
    document.getElementById("navBG").style.backgroundImage=`url('${imageName}')`;  
  }
  const handleChangeBG3 = (event, imageName) => {
    event.stopPropagation();
    document.getElementById("navBG").style.backgroundImage=`url('${imageName}')`;  
  }
  const handleChangeBG4 = (event, imageName) => {
    event.stopPropagation();
    document.getElementById("navBG").style.backgroundImage=`url('${imageName}')`;  
  }

  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <p className="copyright pull-right">&copy; Ashghal</p>
        </div>

        <div className="fixed-plugin">
    <div className="dropdown">
    <a href="#" data-toggle="dropdown">
    <i className="pe-7s-config configfixed fa-2x"> </i>
    </a>
    <ul className="dropdown-menu">
    <li className="header-title">Configuration</li>
    <li className="adjustments-line">
    <a href="javascript:void(0)" className="switch-trigger">
    <p>Sidebar Image</p>
    <input className="switch switch-sidebar-image" type="checkbox" data-toggle="switch" checked data-off-text="OFF" data-on-text="ON" />
    <div className="clearfix"></div>
    </a>
    </li>
    <li className="adjustments-line">
    <a href="javascript:void(0)" className="switch-trigger">
    <p>Sidebar Mini</p>
    <input className="switch switch-sidebar-mini" type="checkbox" data-toggle="switch" data-off-text="OFF" data-on-text="ON" />
    <div className="clearfix"></div>
    </a>
    </li>
    <li className="adjustments-line">
    <a href="javascript:void(0)" className="switch-trigger">
    <p>Fixed Navbar</p>
    <input className="switch switch-navbar-fixed" type="checkbox" data-toggle="switch" data-off-text="OFF" data-on-text="ON" />
    <div className="clearfix"></div>
    </a>
    </li>
    <li className="adjustments-line">
    <a href="javascript:void(0)" className="switch-trigger">
    <p>Filters</p>
    <div className="pull-right">
    <span className="badge filter" data-color="black"></span>
    <span className="badge filter badge-azure" data-color="azure"></span>
    <span className="badge filter badge-green" data-color="green"></span>
    <span className="badge filter badge-orange active" data-color="orange"></span>
    <span className="badge filter badge-red" data-color="red"></span>
    <span className="badge filter badge-purple" data-color="purple"></span>
    </div>
    <div className="clearfix"></div>
    </a>
    </li>
    <li className="header-title">Sidebar Images</li>
    <li>
    <a className="img-holder" href="javascript:void(0)">
    <img src="../../../img/full-screen-image-1a.jpg" onClick={(event) => handleChangeBG(event, '../img/full-screen-image-1.jpg')}  />
    </a>
    </li>
    <li>
    <a className="img-holder" href="javascript:void(0)">
    <img src="../../../img/sidebar-5a.jpeg"  onClick={(event) => handleChangeBG2(event, '../img/sidebar-5.jpg')} />
    </a>
    </li>
    <li className="active">
    <a className="img-holder" href="javascript:void(0)">
    <img src="../../../img/full-screen-image-2.jpg" onClick={(event) => handleChangeBG3(event, '../img/full-screen-image-2a.jpg')} />
    </a>
    </li>
    <li className="active">
    <a className="img-holder" href="javascript:void(0)">
    <img src="../../../img/full-screen-image-4a.jpg" onClick={(event) => handleChangeBG4(event, '../img/full-screen-image-4.jpg')} />
    </a>
    </li>
  
    </ul>
    </div>
    </div>
      </footer>
      <Head>
        <script src="../../../js/jquery.min.js"></script>
        <script src="../../../js/bootstrap.min.js"></script>
        <script src="../../../js/main.js"></script>
        <script src="../../../js/bootstrap-switch-tags.min.js"></script>
        <script src="../../../js/sweetalert2.js"></script>
        <script src="../../../js/demo.js"></script>

      </Head>
    </React.Fragment>
  );
};
export default Footer;
