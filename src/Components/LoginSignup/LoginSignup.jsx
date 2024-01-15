import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import pass_icon from '../Assets/password.png'

const LoginSignup = () => {

const [action, setAction] = useState("Login");

  return (
    <div className = "container">

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

        <div className="inputs">

            {action === "Login" ? <div></div> :  
                <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div> }

           
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>

        </div>

    {action === "Sign Up" ? <div></div> :
            <div className="forgot-password">Reset Password <span>Click Here!</span></div>
        }

        <div className="submit-container">
            <div className={action === "Login"?"submit black": "submit"} onClick = {() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up"?"submit black": "submit"} onClick = {() => {setAction("Login")}}>Login</div>
        </div>

 {action === "Login" ? <div></div> : <div className="plzsign"> If you do not have an account. Please Sign Up!</div>
 }

    </div>
  )
}

export default LoginSignup
