/* eslint-disable react/no-unescaped-entities */
import './AboutMe.scss';


function AboutMe(){
    return(
        <div className='about-me-container'>
            <div className="about-me-wrapper">
                <div className="avatar">
                    <img src= {import.meta.env.BASE_URL + "/avatars/avatar1.png"} alt="wilfriedngoune Workspace" />
                </div>

                <div className="bio-container">
                    <p>
                        <div className="text1">Hey 👋  <br /> They call me <span> &lt;Wilfried /&gt; </span></div>

                        <div className="text2">I'm passionate about Tech 👨‍💻 and Finance 💰. <br />I like listening to music and I regularly do sport to keep fit.</div>

                        <div className="text3">My main role is to set up end-to-end software in order to bring added value to your business.</div>
                    </p>

                    <div onClick={() => window.open(import.meta.env.BASE_URL + '/cv.pdf', '_blank')} className="download-cv">Download my CV</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe