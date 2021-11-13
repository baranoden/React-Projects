import React from 'react'
import "./Mobile.css"

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
            <i class="fas fa-times-circle"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
            <a href="#Projects" >
            <i class="fas fa-tasks"></i>Projects
            </a>
            </div>
            <div className="mobile-option">
            <a href="#About-me" >
            <i class="fas fa-atlas options-icon"></i>About Me
            </a>
            </div>
            <div className="mobile-option">
            <a href="#Contact" >
            <i class="fas fa-id-card options-icon"></i>Contact
            </a>
            </div>
            <div className="mobile-option">
            <a href="#Comments" >
            <i class="fas fa-comment options-icon"></i>Comments
            </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile