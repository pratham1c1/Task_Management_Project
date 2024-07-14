import '@components/Count_Card/Count_Card.css'
import React, { useEffect } from 'react'

function Count_Card(props){

    const title = props.title;
    const value = props.value;
    const title_color = props.title_color;
    const value_color = props.value_color;
    
    return(
        <div className='card'>
            <div className='card_title' style={{backgroundColor:title_color}}>
                <p>{title}</p>
            </div>

            <div className='card_value' style={{backgroundColor:value_color}}>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Count_Card