//import '../public/js/jquery.min.js'
//import '../public/js/light-bootstrap-dashboard-v=1.4.1.js'


import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
    return ( 
      <div className="wrapper wrapper-full-page">
      <div className="full-page login-page" data-color="purple" style={{backgroundImage : `url("../img/login-bg.jpeg")` }} >
          <div className="content">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                          <form method="#" action="#">
  
                              <div className="card">
                                  <div className="header text-center">Login</div>
                                  <div className="content">
                                      <div className="form-group">
                                          <label>Username</label>
                                          <input type="email" placeholder="Username" className="form-control" />
                                      </div>
                                      <div className="form-group">
                                          <label>Password</label>
                                          <input type="password" placeholder="Password" className="form-control" />
                                      </div>
                                      <div className="form-group">
                                          <div className="checkbox">
                                              <input id="checkbox2" type="checkbox" checked />
                                              <label for="checkbox2">Remember</label>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="footer text-center">
                                      <button type="submit" className="btn btn-fill btn-warning btn-wd">Login</button>
                                      <Link href="/dashboard" className="btn ">SIGN IN</Link>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}
