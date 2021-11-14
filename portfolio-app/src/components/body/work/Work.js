import React from 'react'
import Seperator from '../../common/seperator/Seperator'
import { WorkData } from '../../data/Workdata'
import "./Work.css"
import Workcard from './Workcard'

function Work() {
    const data = WorkData
    return (
        <div id="Work" className="work">
            <Seperator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((item) =>{
                    return(
                        <Workcard item={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Work
