import React from 'react'
import ReactDOM from 'react-dom/client'
import instagram from '../images/instagram.png'
import github from '../images/github.png'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'



export default function Interests() {
    return (
        <div className="container-interests">
            <div className="interests-box">
                <h2>Interests</h2>
                <p>Gym, running, OAPU grinder, playing guitar.</p>
            </div>
            <div className="images">
                <img className="icons" src={ instagram }></img>
                <img className="icons" src={ github }></img>
                <img className="icons" src={ twitter }></img>
                <img className="icons" src={ facebook }></img>
            </div>

        </div>
    )
}