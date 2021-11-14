import React from 'react'
import Seperator from '../../common/seperator/Seperator'
import { ProjectData } from '../../data/Projectsdata'
import ProjectCard from './ProjectCard'
import "./Projects.css"

function Projects() {
    const data = ProjectData
    return (
        <div id="Projects" className="projects">
            <Seperator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project={project}/>  
                })}
            </div>
            
        </div>
    )
}

export default Projects
