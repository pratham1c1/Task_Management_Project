import '@components/Left_Vertical_Sidebar/Left_vs.css'
import React from 'react';
import Count_Card from '@components/Count_Card/Count_Card';

function Left_vs(){

    const[string1 , setParameter] = React.useState("Completed");

    const openNav = () => {
        // document.getElementById("mySidebar").style.display = "block";
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("left_side").style.width = "250px";
        // document.getElementById("main").style.display = "none";
        document.getElementById("main").style.width = "0";
      };
      
    const closeNav = () => {
        // document.getElementById("mySidebar").style.display = "none";
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("left_side").style.width = "100px";
        document.getElementById("main").style.marginLeft= "0";
        // document.getElementById("main").style.display = "block";
        document.getElementById("main").style.width = "100px";
      };

    return(
        <>
            <div className='main_page'>
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
                <div className='right_side'>
                    <div className='card_template'>
                        <Count_Card title="Completed" value='1' title_color='rgb(49 99 37)' value_color='rgb(65 68 81)'/>
                        <Count_Card title="In Progress" value='3' title_color='#336d8f' value_color='rgb(65 68 81)'/>
                        <Count_Card title="Overdue" value='2' title_color='#c04e4e' value_color='rgb(65 68 81)'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Left_vs