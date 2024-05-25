import './Header.scss'
import menu from '../../assets/menu.svg'
import { useEffect, useState, useRef } from 'react';


function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        console.log(offsetTop);
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
        setIsMenuOpen(false);
        }
      };

    return(
        <div className={isScrolled ? 'header-container border-bottom' : 'header-container no-border'}>
            <header className={isScrolled ? 'border' : ''}>
                <div className="logo">W.N.</div>
                <div onClick={() => window.open('https://github.com/wilfriedngoune/my-portfolio', '_blank')}  title='Code on GitHub' className="mode-svg-container">
                   &lt;/&gt;
                </div>
                <div onClick={toggleMenu} className="menu-container">
                    <img src={menu} alt="" />
                </div>
                {isMenuOpen && <div ref={menuRef} className="nav-menu">
                    <a className="link" onClick={() => scrollToSection('about')} >About</a>
                    <a className="link" onClick={() => scrollToSection('education')}>Education</a>
                    <a className="link" onClick={() => scrollToSection('experience')}>Experience</a>
                    <a className="link" onClick={() => scrollToSection('skills')}>Skills</a>
                    <a className="link" onClick={() => scrollToSection('projects')}>Projects</a>
                    <a className="link" onClick={() => scrollToSection('contact')}>Contact</a>
                    <div onClick={() => window.open('https://github.com/wilfriedngoune/my-portfolio', '_blank')} className="link colored"> &lt;/&gt; Code on GitHub</div>
                </div>}
            </header>
        </div>
    )
}

export default Header