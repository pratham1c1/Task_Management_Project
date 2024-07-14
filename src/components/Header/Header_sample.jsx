import siteLogo from '@assets/logo-no-background.svg'
import '@components/Header/Header_sample.css'
import React, { Component } from "react";
import { GoHomeFill } from "react-icons/go";

function Header_test(){

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.body.style.overflow="hidden";
    } else {
      x.className = "topnav";
      document.body.style.overflow="scroll";
    }

  };
    return(
        <>
        <header>
        <div className='Navibar'>
            <div>
                <img className="siteLogo" src={siteLogo} />
                {/* <h4>First Part</h4> */}
            </div>
        <div className="topnav" id="myTopnav">
            <a href="#Home">Home</a>
            <a href="#Features">Features</a>
            <a href="#Features">About</a>
            <a className='line'><div className="lineDivider"></div></a>
            <button className="loginButton">Login</button>
            <button className="loginButton">Start for Free</button>
            
        </div>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                <i className="fa fa-bars"></i>
            </a>
        </div>     
        </header>
        </>
    )
}

export default Header_test