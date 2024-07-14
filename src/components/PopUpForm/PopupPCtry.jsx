import { useEffect, useLayoutEffect, useState } from "react";
import "./PopupPCtry.css"

function PopupPCtry({setpopupDiv}){

    // const [isDivVisible , setIsDivVisible] = useState(isDivVisible);

    const closeDiv= () => {
        console.log("The close x button clicked !!!");
        // document.getElementById("pagePopuId").style.display = 'none';
        document.getElementById("pagePopuId").style.animation = "popupAnimationClose 0.5s linear";
        document.getElementById("mainPageId").style.webkitFilter = "blur(0px)";
        document.body.style.overflowY = 'scroll';
        setpopupDiv(0);
    }


    // useLayoutEffect( ()=>{
    //     console.log("Now in child pop : " , isPopupVisible);
    //     if(isPopupVisible ^ 0){
    //         document.getElementById("popupDivID").style.display = 'block';
    //         document.getElementById("mainPageId").style.webkitFilter = "blur(4px)";
    //         document.body.style.overflowY = 'hidden';
    //     }
    //     else{
    //         document.getElementById("popupDivID").style.display = 'none';
    //         document.getElementById("mainPageId").style.webkitFilter = "blur(0px)";
    //         document.body.style.overflowY = 'scroll';
    //     }
    // },[isPopupVisible]);

    return(
        <>
            <div >
                <div id="popupDivID" className='popupDiv'>
                    <span onClick={closeDiv} className='closeButton'>&times;</span>
                    <form onSubmit={closeDiv} className='popupForm'>
                        <label htmlFor="taskName" className='formLabel'><b>Task Name</b></label>
                        <textarea className='formTextarea' placeholder="Enter Task Name" name="taskName" required></textarea>
                        
                        <label htmlFor="assignee" className='formLabel'><b>Assignee</b></label>
                        <textarea className='formTextarea' placeholder="Enter Assignee Name" name="assignee" required></textarea>
                        
                        <label htmlFor="priority" className='formLabel'><b>Priority</b></label>
                        <select className='formInput' name="priority" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>

                        <label htmlFor="status" className='formLabel'><b>Status</b></label>
                        <select className='formInput' name="status" required>
                            <option value="in-progress">In-progress</option>
                            <option value="to-do">To-do</option>
                            <option value="completed">Completed</option>
                        </select>

                        <label htmlFor="dueDate" className='formLabel'><b>Due Date</b></label>
                        <input type="date" className='formInput' name="dueDate" required />

                        <label htmlFor="createdDate" className='formLabel'><b>Created Date</b></label>
                        <input type="date" className='formInput' name="createdDate" required />

                        <label htmlFor="category" className='formLabel'><b>Category/Project</b></label>
                        <textarea className='formTextarea' placeholder="Enter Category or Project" name="category" required></textarea>

                        <div className='formSubmitContainer'>
                            <button type="submit" className='formSubmit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PopupPCtry;