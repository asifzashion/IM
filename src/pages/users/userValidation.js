//import '../public/js/jquery.min.js'
//import '../public/js/light-bootstrap-dashboard-v=1.4.1.js'

import React,{useState,useContext} from "react";
import Image from 'next/image'
import Link from 'next/link'
import {validEmailRegex} from "../../helper";
import {AppContext} from "../../contexts/AppContextProvider";

export default function userValidation() {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({
        email: '',
        password: ''
    },)
    const {
        actions: {signIn},
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

    return ( 
        <div id="loginUservalid">
        <div className="card">
            <div className="login text-center"><img src="../assets/img/ashghal-logo.png" /></div>
            <div className="header login text-center">User Validation</div>
            <div className="content">
                <div className="form-group">
                    <label>Username</label>
                    <input type="email" placeholder="Username" className="form-control" />
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
                <button type="submit" className="btn btn-fill btn-warning btn-wd">Login</button>
            </div>
        </div>
    </div>
    )
}
