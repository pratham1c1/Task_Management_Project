import React, { useEffect, useRef } from 'react';
import './Popup2.css';

function Popup2({ isVisible, onClose }) {
    const popupDivRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!(event.target.closest('.popupDiv') || event.target.closest('.createButton'))) {
                onClose();
            }
        };

        if (isVisible) {
            document.body.classList.add('blur');
            window.addEventListener('click', handleOutsideClick);
        } else {
            document.body.classList.remove('blur');
        }

        return () => {
            document.body.classList.remove('blur');
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isVisible, onClose]);

    return (
        <div className={`popupContainer ${isVisible ? 'visible' : ''}`}>
            <div className='popupDiv' ref={popupDivRef}>
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

export default Popup2;
