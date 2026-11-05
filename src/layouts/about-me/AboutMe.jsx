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

                        <div className="text2">I'm passionate about Tech 👨‍💻 and Research 🔎. <br />I like listening to music and I regularly do sport to keep fit.</div>

                        <div className="text3"><b>Contact me:</b> ngounewilfried@gmail.com</div>
                        <div className="text3"><b>LinkedIn:</b> Wilfried Ngoune</div>
                        <div className="text3"><b>GitHub:</b> wilfriedngoune</div>
                    </p>

                    <div onClick={() => window.open(import.meta.env.BASE_URL + '/cv.pdf', '_blank')} className="download-cv">Download my CV</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe