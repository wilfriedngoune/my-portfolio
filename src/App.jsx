import { useState } from 'react'
import './App.scss'
import Banner from './layouts/banner/Banner'
import Footer from './layouts/the-footer/Footer'
import Header from './layouts/the-header/Header'
import AboutMe from './layouts/about-me/AboutMe'
import Education from './layouts/Education/Education'
import Contact from './layouts/contact/Contact'
import Project from './layouts/projects/Project'
import Skills from './layouts/skills/Skills'
import Experience from './layouts/experience/Experience'
import Blog from './layouts/blog/Blog'

function App() {
  const [selectedLink, setSelectedLink] = useState('about')
  const links = [
    {
      name : 'About me',
      code : 'about'
    }, 
    {
      name : 'Education',
      code : 'education'
    }, 
    {
      name : 'Experience',
      code : 'experience'
    }, 
    {
      name : 'Skills',
      code : 'skills'
    }, 
    {
      name : 'Projects',
      code : 'projects'
    }, 
    {
      name : 'Blog',
      code : 'blog'
    }, 
    {
      name : 'Contact',
      code : 'contact'
    }, 
  ]


  const handeChangeLink = (link) =>{
    setSelectedLink(link)
  }

  return (
    <>
      <Header />
        <div className="content">
          <Banner />
          <div className="nav-info">
            <div className="nav-bar">
              {
                links.map((link, index) => 
                <div 
                key={index} 
                onClick={() => handeChangeLink(link.code)} 
                className={selectedLink == link.code ? "single-link selected" : "single-link"}>{link.name}</div> )
              }
              
            </div>
            <div className="information-container">
                {selectedLink === 'about'&& <AboutMe />}
                {selectedLink === 'education' && <Education />}
                {selectedLink === 'experience' && <Experience />}
                {selectedLink === 'contact' && <Contact />}
                {selectedLink === 'projects' &&<Project /> }
                {selectedLink === 'blog' &&<Blog /> }
                {selectedLink === 'skills' &&<Skills /> }
            </div>
            <div className="information-container-mobile">
              <h2 id='about' className="title">About</h2>
              <AboutMe />
              <h2  id='education' className="title">Education</h2>
              <Education />
              <h2 id='experience' className="title">Experience</h2>
              <Experience />
              <h2  id='skills' className="title">Skills</h2>
              <Skills />
              <h2  id='projects' className="title">Projects</h2>
              <Project />
              <h2  id='blog' className="title">Blog</h2>
              <Blog />
              <h2  id='contact' className="title">Contact</h2>
              <Contact />
            </div>
          </div>
        </div>

        <Footer />
    </>
  )
}

export default App
