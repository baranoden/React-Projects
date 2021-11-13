import React from 'react'
import About from './about/About'
import "./Body.css"
import Comments from './comments/Comments'
import Contact from './contact/Contact'
import Projects from './projects/Projects'

function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="comments">
                <Comments />
            </section>
        </div>
    )
}

export default Body
