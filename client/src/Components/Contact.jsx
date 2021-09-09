import React from 'react'
import ReactDOM from 'react-dom'

import {useState} from 'react';

import '../Styles/Contact.css';
import Sidebar from './Components/Sidebar.jsx';
import axios from "axios";


function Contact(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');

    function _on_update(e){
        if(e.target.name == "name"){
            setName(e.target.value)
        }
        if(e.target.name == "email"){
            setEmail(e.target.value)
        }
        if(e.target.name == "text"){
            setText(e.target.value)
        }
    }
    function _do_post(){
        const url = "https://react-flask-api.iexi.repl.co/contact"
        axios.post(url,{name:`${name}`,email:`${email}`,text:`${text}`})  .then(function (response) {
            if(response.data["status_message"] == true){
                document.getElementById("main-div2").innerHTML="<p>Done, Message recived</p>";
            }
        })
    }
    return(
        <main>
            <div className="sidebar"><Sidebar Contact={"#5764F1"}/></div>
            <div className="main-div2" id="main-div2">
                <p>Your name</p>
                <input onChange={_on_update} name="name" type="text"/>
                <p>Your Email</p>
                <input onChange={_on_update} name="email" type="text"/>
                <p>Message</p>
                <textarea onChange={_on_update} name="text">

                </textarea>
                <button onClick={_do_post}>Send</button>
            </div>
        </main>
    )
}


export default Contact;