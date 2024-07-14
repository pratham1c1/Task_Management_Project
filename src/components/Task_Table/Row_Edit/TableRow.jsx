import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import './TableRow.css'
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import CompleteMark from '@components/Complete_Mark/Complete_mark';

function TableRow(props){

    const [editableRow, setEditableRow] = useState(0);
    const [saveEditIcon, setSaveEditIcon] = useState("Edit");
    const [flash , setFlash] = useState(0);   //-------------> Used for the flash effect for the row
    const rowRefs = useRef({});

    const handleDoubleClick = () => {
        if(saveEditIcon === "Edit"){
            setEditableRow(1);
            setFlash(1);
            setSaveEditIcon("Save");
        }
        else {    //This case is to toggle the Save Icon back to Edit. 
          setSaveEditIcon("Edit");
          setEditableRow(0);
          setFlash(0);
        }
      };
    
      const handleBlur = () => {
        setEditableRow(0);
        setFlash(0);
      };
    
      const handleChange = (e) => {
        setContent(e.target.textContent);
      };

      const handleClickOutside = useMemo(() => {
        return (event) => {
        if (rowRefs.current[1] && !rowRefs.current[1].contains(event.target)) {
          setEditableRow(0);
          setFlash(0);
          setSaveEditIcon("Edit");
        }
      }
    }, [editableRow]);

      useEffect(() => {
        console.log("The component is rendered in row !!! & ref : " , rowRefs.current[1] );
        const handleClick = (event) => {
          if (editableRow !== 0) {
            handleClickOutside(event, editableRow);
          }
        };
    
        if (editableRow !== 0) {
          document.addEventListener('mousedown', handleClick);
        } else {
          document.removeEventListener('mousedown', handleClick);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClick);
        };
      }, [editableRow]);

    return(
        <>      
                {/* row effects 1. className={flash === 1 ? 'flash-effect' : ''} */}
            {/* <tr className={editableRow === 1 ? 'editable-row' : ''} contentEditable={editableRow === 1} onDoubleClick={() => handleDoubleClick()} onBlur={() => handleBlur()} ref={ref => (rowRefs.current[1] = ref)} onInput={handleChange}> */}
            <tr className={editableRow === 1 ? 'editable-row' : ''} contentEditable={editableRow === 1} onDoubleClick={() => handleDoubleClick()} ref={ref => (rowRefs.current[1] = ref)} onInput={handleChange}>
                  <td>{props.rowData[1]}</td>
                  <td><div className="scrollable">{props.rowData[2]}</div></td>
                  <td>{props.rowData[3]}</td>
                  <td>{props.rowData[4]}</td>
                  <td>{props.rowData[5]}</td>
                  <td><div className="LastCell"><div className="RemTime">12.24</div></div></td>
                  <td>
                    <div className="actionButtons">
                        <div className="EditIcon" onClick={() => handleDoubleClick()}>{saveEditIcon === "Edit" ?<FaEdit size={20}/>:<FaSave size={20} />}</div>
                        <CompleteMark />
                    </div>
                  </td>
            </tr>
        </>
    )
}

export default TableRow;