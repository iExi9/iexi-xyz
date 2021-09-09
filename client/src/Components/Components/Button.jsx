import React from 'react'
import ReactDOM from 'react-dom'

import './Button.css';

function Button(props){
    return(
        <div style={{backgroundColor:`${props.Color}`}} className="button">
            <img src={props.Image}/>
            <p>{props.Text}</p>
        </div>
    )
}

export default Button;