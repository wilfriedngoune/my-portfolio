import { useEffect, useState } from 'react'
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

function App() {
  const [selectedLink, setSelectedLink] = useState('about')
  const [loadImage, setLoadImage] = useState(true)
  const [displaySkeleton, setDisplaySkeleton] = useState(true)
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
      name : 'Contact',
      code : 'contact'
    }, 
  ]

  useEffect(() => {
    setTimeout(() => {
      setLoadImage(false)
    }, 3000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDisplaySkeleton(false)
    }, 2000);
  }, [])

  const handeChangeLink = (link) =>{
    setSelectedLink(link)
  }

  return (
    <>
      <Header />
      {loadImage ? 
        <div className="load-image">
          {displaySkeleton ? <div className="avatar-singleton"></div> :  <img src="/avatars/avatar.png" alt="Avatar 1" /> }
        </div> : <>
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
                {selectedLink === 'skills' &&<Skills /> }
            </div>
            <div className="information-container-mobile">
              <div id='about' className="title">About</div>
              <AboutMe />
              <div  id='education' className="title">Education</div>
              <Education />
              <div id='experience' className="title">Experience</div>
              <Experience />
              <div  id='skills' className="title">Skills</div>
              <Skills />
              <div  id='projects' className="title">Projects</div>
              <Project />
              <div  id='contact' className="title">Contact</div>
              <Contact />
            </div>
          </div>
        </div>

        <Footer />
      </>}
    </>
  )
}

export default App
