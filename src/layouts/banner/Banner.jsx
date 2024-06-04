/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import './Banner.scss'
import { useRef } from 'react';


function Banner(){

    const titleRef = useRef(null);

    useEffect(() => {
        startAnimation();
        return () => stopAnimation();
    }, []);

    const startAnimation = () => {
        resetAnimation();
        setInterval(resetAnimation, 10000);
    };

    const stopAnimation = () => {
        clearInterval(titleRef.current.intervalId);
    };

    const resetAnimation = () => {
        const element = titleRef.current;
        element.classList.remove('title');
        void element.offsetWidth;
        element.classList.add('title');
    };
    return(
        <div className='banner-container'>
            <div className="avatar-info">
                <div className="avatar">
                    <img src="/avatars/avatar.png" className='avatar-1' alt="Avatar 1" />
                </div>
                <div className="info">
                    <div className="name">Wilfried Baudouin, Ngoune Tsaka</div>
                    <div className="localization">Braunschweig, Germany</div>
                    <div ref={titleRef} className="title">I'am a WEB Developer !</div>
                </div>
            </div>
            {/* <div className="button">Hire me !</div> */}
        </div>
    )
}

export default Banner