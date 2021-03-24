import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen"
import Login from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import {auth} from './firebase'
import {login,logout, selectUser} from './features/userSlice'  
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function App() {
           
   const user = useSelector(selectUser);

  const dispatch = useDispatch();
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((userAuth)=>{

        if(userAuth){
          //logged in
            
          dispatch(login({  
            uid:userAuth.uid,
            email:userAuth.email,
          }))
        }
        else{
          
          //logged out
          dispatch(logout())
        }
      })
      return unsubscribe;
    }, [dispatch]);


   
  return (
    <div className="app">
     <Router>
     
     {!user?(
       
       <Login />
     ) : (
      <> 
     <Switch>
          <Route exact path="/">
          <HomeScreen />
          </Route>
          <Route path="/profile">
            <ProfileScreen/>
          </Route>
        </Switch>
  </>
  )}
  
</Router>


    </div>
  );
}

export default App;
