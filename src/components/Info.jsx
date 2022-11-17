import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Info() {
    return (
        <div className="container-info">
            <img src="./images/portrait.jpg"></img>
            <h2>Valentin B</h2>
            <h4>Frontend Developer</h4>
            <div className="buttons">
                <button className="email-btn"><span className="span-image"></span>Email</button>
                <button className="linkedin-btn"><span className="span-image-two"></span>LinkedIn</button>
            </div>

        </div>
    )
}