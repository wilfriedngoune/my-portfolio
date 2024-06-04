/* eslint-disable react/no-unescaped-entities */
import './Experience.scss';


function Experience(){
    return(
        <div className='experience-container'>
            <div className="experience-wrapper">
                <div className="single-experience">
                    <img src="/tyrexdigital.png" className = 'logo' alt="" />

                    <div className="other-info">
                        <div className="work-title">Fullstacks Developer & Designer</div>
                        <div className="name-type">
                            <div className="name">Tyrex Digital</div>
                            <div>•</div>
                            <div className="type">Full time</div>
                        </div>
                        <div className="time">March 2022 - August 2023</div>
                        <div className="description">Working in this company has really taught me about collaboration and communication between colleagues. I also learned how to build good interfaces with good development practices.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience