import '@components/Left_Vertical_Sidebar/Left_vs_uat1.css'
import React from 'react';

function Left_vs_uat1(){

    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("left_side").style.width = "250px";
        document.getElementById("main").style.width = "0";
      };
      
    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("left_side").style.width = "100px";
        document.getElementById("main").style.marginLeft= "0";
        document.getElementById("main").style.width = "100px";
      };

    return(
        <>
            <div id='left_side' className='left_side'>
                <div id="main" className='ham_sidebar'>
                    <button id="ham_button" className="openbtn" onClick={openNav}>☰</button>  
                </div>
                <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
                    <a href="#">Home</a>
                    <a href="#">Dashboard</a>
                    <a href="#">Profile</a>
                </div>
            </div>
        </>
    )
}

export default Left_vs_uat1
