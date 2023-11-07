import Head from 'next/head';
import React, { useState, useEffect} from "react";
import cookie from "js-cookie";

const Header = () => {

  const [addClassToBody, setAddClassToBody] = useState(false);

  const handleLanguageClick = (toLang) => {
    cookie.set("lang", toLang, {
      expires: 365
  });
    // setAddClassToBody((prev) => !prev); // Toggle the state
    // if (addClassToBody) {
    //   document.body.classList.add('ar');
    // } else {
    // document.body.classList.remove('en');
    // }
    location.reload();
  };

  // useEffect(() => {
  //   if (addClassToBody) {
  //     document.body.classList.add('en');
  //   } else {
  //   document.body.classList.remove('ar');
  //   }
  // }, [addClassToBody]);


  const handleLogout = () => {
    // Remove the user token from local storage
    localStorage.removeItem('token');
    window.location.href = '/'; // This will reload the page
  };
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-minimize">
            <button
              id="minimizeSidebar"
              className="btn btn-warning btn-fill btn-round btn-icon "
            >
              <i className="pe-7s-menu visible-on-sidebar-regular"></i>
              <i className="pe-7s-menu visible-on-sidebar-mini"></i>
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
            {/* <a className="navbar-brand" href="#">
              PDLM
            </a> */}
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" onClick={() => handleLanguageClick(cookie.get('lang') =='en' ? 'ar' : 'en')} className='language'>{cookie.get('lang') == 'ar' ? "E" : "ع"}</a>
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
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
                <img src="../img/default-avatar.jpeg" className='imgprofile' />
                  <p className="hidden-md hidden-lg">  More <b className="caret"></b> </p>
                </a>
                <ul className="dropdown-menu dropdown-with-icons">
                 
                 
                  <li>
                    <a href="#">
                      <i className="pe-7s-tools"></i> Theme Setting
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">
                      <i className="pe-7s-user"></i> Edit Profile
                    </a>
                  </li> <li className="divider"></li>
                  <li>
                    <a href="#" className="text-danger" onClick={handleLogout} >
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