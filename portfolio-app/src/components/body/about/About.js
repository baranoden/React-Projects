import React from 'react'
import Social from '../../common/social/Social'
import "./About.css"

function About() {
    return (
        <div className="about">
           <div className="about-top">
               <div className="about-info">
               Hello dear visitor 👋, welcome to
               <br /><span className="info-name">my universe.</span>
               <br />a random self-made Frontend Developer.
               </div>
               <div className="about-photo">
                   <img src={require("../../../assets/coding.png").default} className="picture" />

               </div>

           </div>
           <Social />            
        </div>
    )
}

export default About
