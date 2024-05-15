import { useState } from 'react'
import './App.scss'
import Banner from './layouts/banner/Banner'
import Footer from './layouts/the-footer/Footer'
import Header from './layouts/the-header/Header'

function App() {
  const [selectedLink, setSelectedLink] = useState('About me')
  const links = ['About me', 'Education', 'Experience', 'Skills and Certifications', 'Projets', 'Contacts']

  const handeChangeLink = (link) =>{
    setSelectedLink(link)
  }
  return (
    <>
      <Header />
      <div className="content">
        <Banner />
        <div className="nav-bar">
          {
            links.map((link, index) => 
            <div 
            key={index} 
            onClick={() => handeChangeLink(link)} 
            className={selectedLink == link ? "single-link selected" : "single-link"}>{link}</div> )
          }
          
        </div>
        <div className="information-container">

        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
