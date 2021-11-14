import React from 'react'
import About from './about/About'
import "./Body.css"
import Comments from './comments/Comments'
import Contact from './contact/Contact'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Work from './work/Work'

function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="comments">
            <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
            </section>
        </div>
    )
}

export default Body
