import './Footer.scss'
import linkedin from '../../assets/linkedin.svg'
import gmail from '../../assets/gmail.svg'
import github from '../../assets/github.svg'
import leetcode from '../../assets/leetcode.png'


function Footer(){
    return(
        <div className='footer-container'>
            <footer>
                <div title='Gmail' onClick={() => window.open('mailto:ngounewilfried@gmail.com')}  className="img-container">
                    <img src={gmail} alt="Gmail" />
                </div>

                <div title='LinkedIn' onClick={() => window.open('https://www.linkedin.com/in/wilfried-ngoune-679366218', '_blank')} className="img-container">
                    <img src={linkedin} alt="Linkedin" />
                </div>

                <div title='Github' onClick={() => window.open('https://github.com/wilfriedngoune', '_blank')} className="img-container">
                    <img src={github} alt="Github" />
                </div>

                <div title='LeetCode' onClick={() => window.open('https://leetcode.com/u/wilfriedngoune', '_blank')} className="img-container white-back">
                    <img src={leetcode} alt="Upwork" />
                </div>
            </footer>
        </div>
    )
}

export default Footer