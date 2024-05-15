import './Footer.scss'
import linkedin from '../../assets/linkedin.svg'
import gmail from '../../assets/gmail.svg'
import github from '../../assets/github.svg'
import upwork from '../../assets/upwork.svg'


function Footer(){
    return(
        <div className='footer-container'>
            <footer>
                <div className="img-container">
                    <img src={gmail} alt="Gmail" />
                </div>

                <div className="img-container">
                    <img src={linkedin} alt="Linkedin" />
                </div>

                <div className="img-container">
                    <img src={github} alt="Github" />
                </div>

                <div className="img-container">
                    <img src={upwork} alt="Upwork" />
                </div>
            </footer>
        </div>
    )
}

export default Footer