/* eslint-disable react/no-unescaped-entities */
import './Contact.scss';
import upwork from '../../assets/upwork.svg'
import fiverr from '../../assets/fiverr.svg'
import slack from '../../assets/slack.svg'

function Contact(){
    return(
        <div className='contact-container'>
            <div className="contact-wrapper">
               <div className="other-platform">
                <div className="contact-title">Where else you can find me</div>
                <div className="platform-list">
                    <div onClick={() => window.open('https://www.fiverr.com/wilfriedngoune?up_rollout=true', "_blank")} style={{cursor:'pointer'}} className="single-platform">
                        <div className="logo-container">
                            <img src={fiverr} alt="fiverr" />
                        </div>
                        <div className="name">Fiverr</div>
                    </div>

                    <div onClick={() => window.open('https://www.upwork.com/freelancers/~0116d44b39a6f1d417?mp_source=share', '_blank')} style={{cursor:'pointer'}} className="single-platform">
                        <div className="logo-container">
                            <img src={upwork} alt="upwork" />
                        </div>
                        <div className="name">Upwork</div>
                    </div>

                    <div className="single-platform">
                        <div className="logo-container">
                            <img src={slack} alt="slack" />
                        </div>
                        <div className="name">Slack</div>
                    </div>

                    {/* <div className="single-platform">
                        <div className="logo-container">
                            <img src={x} alt="" />
                        </div>
                        <div className="name">X</div>
                    </div> */}
                </div>
               </div>
                <div className="divider"></div>
               <div className="form-section">
                <div className="contact-title">Send me a message 🙃</div>
                <div className="form">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea placeholder='Message' />
                    <div className="submit">Send</div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Contact