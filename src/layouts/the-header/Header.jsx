import './Header.scss'
import dark from '../../assets/dark.svg'



function Header(){
    return(
        <div className='header-container'>
            <header>
                <div className="logo">W.N.</div>
                <div className="mode-svg-container">
                    <img src={dark} alt="Dark mode" />
                </div>
            </header>
        </div>
    )
}

export default Header