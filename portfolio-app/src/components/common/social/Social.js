import React from 'react'
import { SocialData } from '../../data/Socialdata'
import "./Social.css"
function Social() {
    const data= SocialData

    return <div className="social-contact">
            {data.map((item) =>{
                return(
                    <a href={item.link}>
                        <div className="social-icon-div">
                        <img src={item.icon} className="social-icon" />
                        </div>
                        

                    </a>
                    
                )
            })}
        </div>
    
}

export default Social
