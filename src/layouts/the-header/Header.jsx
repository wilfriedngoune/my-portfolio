import './Header.scss'



function Header(){
    return(
        <div className='header-container'>
            <header>
                <div className="logo">W.N.</div>
                <div title='Code on GitHub' className="mode-svg-container">
                   &lt;/&gt;
                </div>
            </header>
        </div>
    )
}

export default Header