import { useEffect, useState } from 'react'
import './App.scss'
import Banner from './layouts/banner/Banner'
import Footer from './layouts/the-footer/Footer'
import Header from './layouts/the-header/Header'
import AboutMe from './layouts/about-me/AboutMe'
import Education from './layouts/Education/Education'
import Contact from './layouts/contact/Contact'
import Project from './layouts/projects/Project'

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
    }, 2000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDisplaySkeleton(false)
    }, 1000);
  }, [])

  const handeChangeLink = (link) =>{
    setSelectedLink(link)
  }

  return (
    <>
      <Header />
      {loadImage ? 
        <div className="load-image">
          {displaySkeleton ? <div className="avatar-singleton"></div> :  <img src="/avatars/avatar1.png" alt="Avatar 1" /> }
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
                {selectedLink === 'contact' && <Contact />}
                {selectedLink === 'projects' &&<Project /> }
            </div>
          </div>
        </div>

        <Footer />
      </>}
    </>
  )
}

export default App
