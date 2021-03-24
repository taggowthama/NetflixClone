import React, { useState } from 'react'
import '../screens/LoginScreen.css'
import SignUpScreen from './SignUpScreen'
function LoginScreen() {

    const [signIn, setSignIn] = useState(false)



    return (
        <div className="loginscreen">
            <div className="loginscreen__background">
                <img className="loginscreen__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button onClick={()=>setSignIn(true)} className="loginscreen__button">Sign In</button>
            </div>
            <div className="loginscreen__gradient"></div>
            <div class="loginscreen__body">
               {signIn? (
               <SignUpScreen /> ):(
                   <>
                    <h1>Unlimited films, TV Programmes and more.</h1>
            <h2>Watch Anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            
            <div class="loginscreen__input">
                <form>
                    <input type="email"
                    placeholder="Email Address"/>
                    <button onClick={()=>setSignIn(true)} className="loginscreen__getstarted">Get Started</button>
                </form>
            </div> 
            </>  
               )}
             
            
               
            </div>
        </div>
    )
}

export default LoginScreen
