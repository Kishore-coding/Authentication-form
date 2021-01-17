import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './components/Home'
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import "./index.css"
import axios from "axios"
import UserContext from "./components/context/UserContext"

function App() {
  const [userData, setUserData]=useState({
    token:undefined,
    user:undefined
  })

  useEffect(()=>{
    const checkLoggedIn = async()=>{
      let token= localStorage.getItem("auth-token");
      if(token===null){
        localStorage.setItem("auth-token", "");
        token="";
      }
      const tokenRes=await axios.post("http://localhost:3000/users/tokenIsValid",null,
          {
            headers:{
                "x-auth-token":token
          }})
          if(tokenRes.data){
            const userRes=await axios.get("http://localhost:3000/users/",
               { 
                 headers:{
                  "x-auth-token":token
                }
              })
              setUserData({
                token,
                user:userRes.data
              })
          }
    }
    checkLoggedIn();

  },[]);
  
  return (
    <div>
    <BrowserRouter>
      <UserContext.Provider value={{userData,setUserData}}>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
