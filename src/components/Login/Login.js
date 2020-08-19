import React from 'react'
import logo from "../../assets/logo.png";
import './Login.css'
import { accessUrl } from "../Spotify/Spotify";

function Login() {
    return (
        <div className='login'>
            <img className='logo' src={logo} alt="logo"/>
            <a className='button-login' href={accessUrl}> Login To Spotify</a>
        </div>
    )
}

export default Login
