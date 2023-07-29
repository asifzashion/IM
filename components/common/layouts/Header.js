import Head from 'next/head';
import React, { useState } from "react";

const Header = () => {
    
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-minimize">
            <button
              id="minimizeSidebar"
              className="btn btn-warning btn-fill btn-round btn-icon"
            >
              <i className="pe-7s-angle-left visible-on-sidebar-regular"></i>
              <i className="pe-7s-angle-right visible-on-sidebar-mini"></i>
            </button>
          </div>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              PDLM
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <i className="pe-7s-graph3"></i>
                  <p>Stats</p>
                </a>
              </li>
              
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                >
                  <i className="pe-7s-bell"></i>
                  <span className="notification">5</span>
                  <p className="hidden-md hidden-lg">
                    Notifications
                    <b className="caret"></b>
                  </p>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Notification 1</a>
                  </li>
                  <li>
                    <a href="#">Notification 2</a>
                  </li>
                  <li>
                    <a href="#">Notification 3</a>
                  </li>
                  <li>
                    <a href="#">Notification 4</a>
                  </li>
                  <li>
                    <a href="#">Another notification</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-with-icons">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="pe-7s-power"></i>
                  <p className="hidden-md hidden-lg">
                    More
                    <b className="caret"></b>
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-with-icons">
                  <li>
                    <a href="#">
                      <i className="pe-7s-mail"></i> Messages
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="pe-7s-help1"></i> Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="pe-7s-tools"></i> Settings
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">
                      <i className="pe-7s-lock"></i> Lock Screen
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-danger">
                      <i className="pe-7s-close-circle"></i> Log out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Header;