import { useState, useEffect, useRef } from "react";
import TableRow from "./Row_Edit/TableRow";
import './TableData.css'

const rowData = [
    {
      1 : 1,
      2 : "Hotfix patch schedule need to be published for the PC bank.",
      3 : 3,
      4 : "Prathamesh",
      5 : "In Progress"
    },
    {
      1 : 2,
      2 : "The field on the Dashboard is not working as expected, need to raise a request to DEV team. The field on the Dashboard is not working as expected, need to raise a request to DEV team. The field on the Dashboard is not working as expected, need to raise a request to DEV team.",
      3 : 2,
      4 : "Chethana",
      5 : "In Progress"
    }
]

function TableData(){

    return(
        <>
            <div className="task_table">
              <table className="ac_table">
                <thead>
                  <tr>
                    <th>Task No</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Owner</th>
                    <th>Status</th>
                    <th>Time Remaining</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow rowData = {rowData[0]} />
                  <TableRow rowData = {rowData[1]} />
                </tbody>
              </table>
          </div>
        </>
    )
}

export default TableData;