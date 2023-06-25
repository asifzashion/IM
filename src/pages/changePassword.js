//import '../public/js/jquery.min.js'
//import '../public/js/light-bootstrap-dashboard-v=1.4.1.js'
import React,{useState,useContext} from "react";
import Image from 'next/image'
import Link from 'next/link'
import {validEmailRegex} from "../helper";
//import userValidation from "../pages/users/userValidation"
import {AppContext} from "../contexts/AppContextProvider";

export default function changePassword() {
    const [formData, setFormData] = useState({})
    const [isForgot, setForgot] = useState(0)
    const [isvalidSubmit, setvalidSubmit] = useState(0)
    const [isLogin, setLogin] = useState(1)
    const [uservalidate, setuservalidate] = useState({})

    const [error, setError] = useState({
        email: '',
        password: ''
    },)
    const {
        actions: {signIn,uservValidation},
    } = useContext(AppContext).auth;
   const handleSubmit = async () => {
        const {email, password, urlPrefix} = formData;
        if (email !== '' && validEmailRegex.test(email) && password !== '') {
            const response = await signIn({email, password})
            // if(redirectUrl){
            //     await Router.push(`/${redirectUrl}`, `${urlPrefix}/${redirectUrl}`);
            //     sessionStorage.removeItem('redirectUrl')
            // }
        } else {
            setError({
                errors: {
                    email: "Please enter email address",
                    password: "Please enter your password"
                }
            });
        }
    };
   const handleChange = evt => {
        const {name, value} = evt.target;
        let errors = error;
        setFormData({...formData, [name]: value});
    }

    const handleValidation = evt => {
        setLogin(0)
        setForgot(1)
    }
    const submitrestPwd = async () => {
        const { email} = uservalidate;
        if (email !== '' && validEmailRegex.test(email)) {
            const response = await uservValidation({ email })
        } else {
            setError({
                errors: {
                    email: "Please enter email address",
                }
            });
        }
    }
    const updatePswd = evt => {
        setLogin(1)
        setForgot(0)
        setvalidSubmit(0)
        
    }
    const handleForgotinput = evt => {
        const {name, value} = evt.target;        
        setuservalidate({...uservalidate, [name]: value});
    }

    return ( 
      <div className="wrapper wrapper-full-page">
      <div className="full-page login-page" data-color="purple" style={{backgroundImage : `url("../img/login-bg.jpeg")` }} >
          <div className="content">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                            
                                   
                               <div className="card">
                               <div className="login text-center"><img src="/img/ashghal-logo.png" /></div>
                               <div className="header login text-center">User Registration</div>
                               <div className="content">
                                   <div className="form-group">
                                       <label>Username</label>
                                       <input type="email" placeholder="Username" className="form-control" />
                                   </div>
                                   <div className="form-group">
                                       <label>OTP</label>
                                       <input type="text" placeholder="OTP" className="form-control" />
                                   </div>
                                   <div className="form-group">
                                       <label>Password</label>
                                       <input type="password" placeholder="Password" className="form-control" />
                                   </div>
                                   <div className="form-group">
                                       <div className="checkbox">
                                           <input id="checkbox2" type="checkbox" checked="" />
                                           <label for="checkbox2">
                                   Remember
                                   </label>
                                       </div>
                                   </div>
                               </div>
                               <div className="footer text-center">
                                   <button type="submit" className="btn btn-fill btn-warning btn-wd" onClick={updatePswd}>Update Password</button>
                               </div>
                           </div>
                               
                            </div>
                           
                            
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}