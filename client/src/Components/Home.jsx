import React from 'react'
import ReactDOM from 'react-dom'

import '../Styles/Home.css';
import Sidebar from './Components/Sidebar.jsx';
import Card from './Components/Card.jsx';

import Technologys from '../Assets/technologys.svg';

function Home(){
    return(
        <main>
            <div className="sidebar"><Sidebar Home={"#5764F1"}/></div>
            <div className="main-div">
                <div className="main-about">
                    <div className="about-me">
                        <p>Hi I'am</p>
                        <p style={{color:'#768FEA',fontSize:'60px'}}>iExi</p>
                        <p>A Web developer</p>
                    </div>
                    <div className="main-technology">
                        <div>
                            <p><span style={{color:'#768FEA'}}>Designed </span> Using :</p>
                        </div>
                        <div className="technology-icons">
                            <img src={Technologys}/>
                        </div>
                    </div>
                </div>
                <div className="me-card">
                    <Card Name={"iExi#0416"} Image={"https://cdn.discordapp.com/avatars/669178617519013899/494df05f640a700ff59a515f9b1311b7.png?size=1024"} />
                </div>
            </div>
        </main>
    )
}

export default Home;