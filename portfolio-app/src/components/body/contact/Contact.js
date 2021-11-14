import React from 'react'
import Seperator from '../../common/seperator/Seperator'
import Social from '../../common/social/Social'
import "./Contact.css"



function Contact() {
    return (
        <div id="Contact"className="contact">
            <Seperator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to contact me? Contact me on any of these platforms</p>
                <Social />

                </div>
                <div className="download">
                    <a dowload href={require("../../../assets/baran.front.docx").default}>
                    <i class="fas fa-cloud-download-alt"></i>
                        Download Resume
                    </a>
                </div>

            </div>
        
        </div>
    )
}

export default Contact
