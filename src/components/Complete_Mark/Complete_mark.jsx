import { FaCircleCheck } from "react-icons/fa6";
import React, { useState, useRef, useEffect } from 'react';
import { IconContext } from "react-icons";

function CompleteMark(){

    const [colorMark, setColorMark] = useState('white');

    const changeMarkColor = () => {
          setColorMark(prevColors => prevColors=== 'rgb(0, 255, 0)' ? 'white' : 'rgb(0, 255, 0)') // Toggle color;
      }

    return(
        <>
            <div id="completeMark" onClick={() => changeMarkColor()}>
                <IconContext.Provider value={{ color:colorMark , size:20, className: "contactIcon" }}><FaCircleCheck /></IconContext.Provider>
            </div>
        </>
    )
}

export default CompleteMark;