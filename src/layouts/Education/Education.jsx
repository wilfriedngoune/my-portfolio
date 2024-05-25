/* eslint-disable react/no-unescaped-entities */
import './Education.scss';
import uni1 from '../../assets/uni-yaounde1.png'
import ostfalia from '../../assets/ostfalia.png'
import { useState } from 'react';

function Education(){
    const [selectedUni, setSelectedUni] = useState('ostfalia')
    return(
        <div className='education-container'>
            <div className="education-wrapper">
                    <div className="uni-section">
                        <div onClick={() => setSelectedUni('ostfalia')} className={selectedUni == 'ostfalia' ? "single-uni selected" : "single-uni"}>
                            <div className="logo-container">
                                <img src={ostfalia} alt="" />
                            </div>
                            <div className="information">
                                <div className="name">Hochschule OStfalia</div>
                                <div className="year">Master of Science</div>
                                <div className="diplom">Informatic and Robotic</div>
                            </div>
                        </div>
                        <div onClick={() => setSelectedUni('uy1')} className={selectedUni == 'uy1' ? "single-uni selected" : "single-uni"}>
                            <div className="logo-container">
                                <img src={uni1} alt="" />
                            </div>
                            <div className="information">
                                <div className="name">University of Yaounde 1</div>
                                <div className="year">Bachelor of Science</div>
                                <div className="diplom">Software Engeneering</div>
                            </div>
                        </div>
                </div>

                <div className="details-section">
                        {
                            selectedUni == 'ostfalia' && 
                            <div className="content">
                                <div className="uni-fac">
                                    <div className="name">Hochschule Ostfalia</div>
                                    <div className="fac">Master, Informatic</div>
                                </div>
                                <div className="local">Wolfenbüttel, Germany</div>
                                <div className="year">2024 - Now</div>

                                <ul>
                                    <li>Algorithms, Data Structures and Database</li>
                                    <li>Modeling and object-oriented programming</li>
                                    <li>WEB programming</li>
                                    <li>Information system and application testing</li>
                                    <li>Advanced programming technology</li>
                                </ul>

                                <div className="certificats">Certificats</div>
                            </div>
                        }

                        {
                            selectedUni == 'uy1' && 
                            <div className="content">
                                 <div className="uni-fac">
                                    <div className="name">University of Yaounde 1</div>
                                    <div className="fac">Bachelor, Software Engeneering</div>
                                </div>
                                <div className="local">Yaounde, Cameroon</div>
                                <div className="year">2019 - 2022</div>

                                <ul>
                                    <li>Algorithms, Data Structures and Database</li>
                                    <li>Modeling and object-oriented programming</li>
                                    <li>WEB programming</li>
                                    <li>Information system and application testing</li>
                                    <li>Advanced programming technology</li>
                                </ul>

                                <div className="certificats">Certificats</div>
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default Education