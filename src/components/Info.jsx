import React from 'react'
import ReactDOM from 'react-dom/client'
import portrait from '../images/portrait.jpg'

export default function Info() {
    return (
        <div className="container-info">
            <img src={portrait}></img>
            <h2>Valentin B</h2>
            <h4>Frontend Developer</h4>
            <div className="buttons">
                <button className="email-btn"><span className="span-image"></span>Email</button>
                <button className="linkedin-btn"><span className="span-image-two"></span>LinkedIn</button>
            </div>

        </div>
    )
}