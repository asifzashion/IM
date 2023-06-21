import Image from 'next/image'
//import '../public/js/misc.js'
//import '../public/js/off-canvas.js'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth">
        <div className="row flex-grow">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left p-5">
              <div className="brand-logo">
                <img src="../images/ashghal-logo.png" />
              </div>
              <h4>Login</h4>
              <form className="pt-3">
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"  required/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div className="form-group pb-3">
                <div className="mt-3 login pull-left">
                    <Link className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" href={{
                      pathname: "/dashboard",
                    }}
                      as={`/dashboard`}
                    >
                      SIGN IN
                  </Link>
                </div>
                <div className="my-2 pull-right">
                
                  <a href="#" className="auth-link text-black">Forgot password?</a>
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
