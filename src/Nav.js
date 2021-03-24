import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'


function Nav() {

    const history = useHistory();
    const [show, handleshow] = useState(false)
    const transitionNavbar =()=>{
        
        if(window.scrollY > 100){
            handleshow(true)
        }else{
            handleshow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar)   
        return () => {
            window.removeEventListener("scroll",transitionNavbar)
        }
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img onClick = {()=>history.push("/")} className="nav__logo" 
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <img onClick = {()=>history.push("/profile")} className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            </div>
        </div>
    )
}

export default Nav
