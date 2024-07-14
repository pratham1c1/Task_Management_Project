import Count_Card from "@components/Count_Card/Count_Card";
import Left_vs_uat1 from "@components/Left_Vertical_Sidebar/Left_vs_uat1";
import PopupPCtry from "@components/PopUpForm/PopupPCtry";
import TableData from '@components/Task_Table/TabelData';
import "./Index_Page.css"
import { useEffect, useState, useRef } from "react";

const Index_Page = () => {
  const [isPopupVisible , setPopupVisible] = useState(0);
    const popupRef = useRef(null);

    const togglePopup= () => {
        console.log("Button is clicked !!! & popup : " , isPopupVisible);
        isPopupVisible === 0 ? setPopupVisible(1) : setPopupVisible(0);
    }
    useEffect(() => {
        if (isPopupVisible !== 0) {
          document.getElementById("mainPageId").style.webkitFilter = "blur(4px)";
          document.body.style.overflowY = 'hidden';
          document.getElementById("pagePopuId").style.animation = "popupAnimationOpen 0.5s linear";
          document.getElementById("pagePopuId").style.animationFillMode = 'forwards';
    
          // Add event listener to detect clicks outside the popup
          const handleClickOutside = (event) => {
            console.log("popup current : " , popupRef.current , " & contains : " , event.target);
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                document.getElementById("pagePopuId").style.animation = "popupAnimationClose 0.5s linear";
                document.getElementById("mainPageId").style.webkitFilter = "blur(0px)";
                document.body.style.overflowY = 'scroll';
                setPopupVisible(0);
            }
          };
    
          document.addEventListener('mousedown', handleClickOutside);
          
          // Clean up the event listener on component unmount or when isPopupVisible changes
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        } else {
          document.getElementById("mainPageId").style.webkitFilter = "";
          document.body.style.overflowY = 'auto';
        }
      }, [isPopupVisible]);
    
        

    return (
        <>
            <div className="first_page">
            <div id="mainPageId" className='main_page'>
                <div className="left_side1">
                    <Left_vs_uat1/>
                </div>
                <div className='right_side'>
                    <div className='card_template'>
                        <Count_Card title="Completed" value='1' title_color='rgb(49 99 37)' value_color='rgb(65 68 81)'/>
                        <Count_Card title="In Progress" value='3' title_color='#336d8f' value_color='rgb(65 68 81)'/>
                        <Count_Card title="Overdue" value='2' title_color='#c04e4e' value_color='rgb(65 68 81)'/>
                    </div>
                    <div className='divCreateButton'><button className="createButton" onClick={togglePopup}>Create</button></div>
                    <TableData />
                </div>
            </div>
            <div id="pagePopuId" ref={popupRef} className="pagePopupForm"><PopupPCtry setpopupDiv = {setPopupVisible} /></div>
            </div>
        </>
    )
}

export default Index_Page;
