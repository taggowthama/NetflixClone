import React from 'react'
import { useSelector } from 'react-redux'
import Nav from "../Nav"
import {selectUser} from "../features/userSlice"
import {auth} from '../firebase'
import './ProfileScreen.css'
function ProfileScreen() {

    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
           <Nav />
           <div class="profileScreen__body">
            <h1>Edit Profile</h1>
            <div class="profileScreen__info">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
             <div class="profileScreen__details">
                    <h2>{user.email} </h2>
                <div class="profileScreen__plans">
                        <h3>Plans (Current Plan: premium)</h3>
                    <div class="profileScreen__subscribedate">
                             <h3>Renewal date: 04/05/2021</h3>
                          <div class="profileScreen_subscribe">
                            <h3>Netflix Standard<br/>1080p</h3>
                            <button className="profileScreen__button">Subscribe</button>
                            
                         </div>
                         <div class="profileScreen_subscribe">
                            <h3>Netflix Standard<br/><span className="profileScreen_clarity">720p</span></h3>
                            <button className="profileScreen__button">Subscribe</button>
                            
                         </div>
                         <div class="profileScreen_subscribe">
                            <h3>Netflix Standard<br/><span className="profileScreen_clarity">4k+HDR</span></h3>
                            <button className="profileScreen__button">Subscribe</button>
                            
                         </div>
                    </div>
                    
                <button onClick={()=>auth.signOut()} className="profileScreen_signout">Sign Out</button>
                </div>
             </div>
            </div>
           </div>
        </div>
    )
}

export default ProfileScreen
