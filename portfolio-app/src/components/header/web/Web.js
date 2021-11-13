import React from 'react'
import "./Web.css"


function Web() {
    return (
        
        <div className="web">
            <div className="web-options">
            <a href="#Projects" >
            <i class="fas fa-tasks"></i>Projects
            </a>
            </div>
            <div className="web-options">
            <a href="#About-me" >
            <i class="fas fa-atlas options-icon"></i>About Me
            </a>
            </div>
            <div className="web-options">
            <a href="#Contact" >
            <i class="fas fa-id-card options-icon"></i>Contact
            </a>
            </div>
            <div className="web-options">
            <a href="#Comments" >
            <i class="fas fa-comment options-icon"></i>Comments
            </a>
            </div>
        </div>
        
    )
}

export default Web
