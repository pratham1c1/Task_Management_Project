import React, { useEffect } from 'react';
import './Popup.css';

function Popup({ isVisible, onClose }) {
    // Handle clicks outside the popup to close it
    useEffect(() => {
        // console.log('Popup component mounted');
        // console.log('Clicked target:', event.target);
        // console.log('isVisible : ' , isVisible);
        const handleOutsideClick = (event) => {
            // console.log('Clicked outside popup:', event.target);
            // console.log('event.target.closest popupdiv: ' , event.target.closest('.popupDiv'));
            // console.log('event.target.closest createbutton: ' , event.target.closest('.createButton'));
            // // console.log('combined value : ', (event.target.closest('.popupDiv') || event.target.closest('.createButton')));
           
            if (!(event.target.closest('.popupDiv') || event.target.closest('.createButton'))) {
                onClose();
            }
        };
    
        if (isVisible) {
            console.log('Adding click event listener');
            window.addEventListener('click', handleOutsideClick);
        }
    
        return () => {
            console.log('Removing click event listener');
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isVisible, onClose]);
    

    if (!isVisible) return null;

    return (
        <div className={`popupContainer ${isVisible ? 'blurred' : ''}`}>
            <div className='popupDiv'>
                <span className='closeButton' onClick={onClose}>&times;</span>
                <form className='popupForm'>
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
    );
}

export default Popup;