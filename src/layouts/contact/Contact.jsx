/* eslint-disable react/no-unescaped-entities */
import './Contact.scss';
import upwork from '../../assets/upwork.svg'
import fiverr from '../../assets/fiverr.svg'

function Contact(){
    return(
        <div className='contact-container'>
            <div className="contact-wrapper">
               <div className="other-platform">
                <div className="contact-title">Where else you can find me</div>
                <div className="platform-list">
                    <div className="single-platform">
                        <div className="logo-container">
                            <img src={fiverr} alt="" />
                        </div>
                        <div className="name">Fiverr</div>
                    </div>

                    <div className="single-platform">
                        <div className="logo-container">
                            <img src={upwork} alt="" />
                        </div>
                        <div className="name">Upwork</div>
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