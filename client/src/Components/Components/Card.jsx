import React from 'react'
import ReactDOM from 'react-dom'

import './Card.css';
import Button from './Button.jsx';
import Discord from './Assets/discord.svg';
import Github from './Assets/github.svg';

function Card(props){
    return(
        <div className="card">
            <div style={{textAlign:'center'}}>
                <img src={props.Image}/>
                <p>{props.Name}</p>
            </div>
            <div className="buttons">
                <a href="https://github.com/iExi9"><Button Color={"#333333"} Image={Github} Text={"Github"}/></a>
                <a href="https://discord.com/channels/@me/849641637831376936"><Button Color={"#5764F1"} Image={Discord} Text={"Discord"}/></a>
            </div>
        </div>
    )
}


export default Card;