import React from 'react'
import "./Workcard.css"
function Workcard({item}) {
    return   <div className="work-card">
            <img src={item.companyLogo} className="work-logo" />
            <div className="work-info">
                <label className="company-name" > {item.company} - {item.role}</label>
                <div className="work-dates">
                    <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    
}

export default Workcard
