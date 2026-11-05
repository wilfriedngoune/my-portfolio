/* eslint-disable react/no-unescaped-entities */
import './Education.scss';
import uni1 from '../../assets/uni-yaounde1.png'
import ostfalia from '../../assets/ostfalia.png'
import graduation from '../../assets/graduation.svg'
import { useState } from 'react';
import ReadMoreModal from '../../components/read-more-modal/ReadMoreModal';

function Education(){
    const [selectedUni, setSelectedUni] = useState('ostfalia')
    const [isModalOpenUY1, setIsModalOpenUY1] = useState(false);
    const [isModalOpenOST, setIsModalOpenOST] = useState(false);

    const educationDetailUY1 = [
    {
        title: "Programming Fundamentals",
        description:
        "Introduction to programming concepts using C and Python.",
    },
    {
        title: "Algorithms & Data Structures",
        description:
        "Algorithm design, data structures, and problem-solving techniques.",
    },
    {
        title: "Database Design & Management",
        description:
        "Relational database design, SQL, and MySQL.",
    },
    {
        title: "Object-Oriented & Advanced Programming",
        description:
        "Object-oriented programming with Java and C++, including best practices and software testing.",
    },
    {
        title: "Web Development & Information Systems",
        description:
        "Full-stack web development using HTML, CSS, JavaScript, PHP, and Bootstrap.",
    },
    {
        title: "Academic Project – Course Planning App",
        description:
        "Developed a full-stack web application to manage university course schedules and classroom allocation at the University of Yaoundé I.",
    },
    ];


    const educationDetailOST = [
    {
        title: "UI/UX Design, Mobile Development & Cloud Computing",
        description:
        "UI/UX prototyping with Figma, cross-platform mobile development with React Native, CI/CD pipelines using Azure DevOps, and containerization with Docker.",
    },
    {
        title: "Formal Methods & Advanced C++ Programming",
        description:
        "Formal specification, advanced C++ programming paradigms, and software design principles for building reliable systems.",
    },
    {
        title: "Robotics & Autonomous Systems",
        description:
        "Robot development using Python and ROS, including the implementation of Adaptive Cruise Control (ACC) with MATLAB/Simulink.",
    },
    {
        title: "Smart IoT & Location-Based Systems",
        description:
        "Microcontroller programming, sensor data acquisition and processing, and development of intelligent event-driven systems using Python.",
    },
    {
        title: "Data Analytics & Real-Time Stream Processing",
        description:
        "Data preprocessing, cleaning, clustering, and analysis, combined with real-time data streaming using Apache Kafka.",
    },
    {
        title: "Machine Learning & Neural Networks",
        description:
        "Supervised learning, reinforcement learning, classification, and neural network development using Python and TensorFlow.",
    },
    {
        title: "Master's Thesis – AI for Air Traffic Management",
        description:
        "Evaluation of a reinforcement learning-based system for mid-term aircraft conflict resolution in upper airspace, focusing on safety and decision-making.",
    },
    ];


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
                                <div className="diplom">Informatic</div>
                            </div>
                        </div>
                    
                        <div onClick={() => setSelectedUni('uy1')} className={selectedUni == 'uy1' ? "single-uni selected" : "single-uni"}>
                            <div className="logo-container">
                                <img src={uni1} alt="University of Yaounde I" />
                            </div>
                            <div className="information">
                                <div className="name">University of Yaounde 1</div>
                                <div className="year">Bachelor of Science</div>
                                <div className="diplom">Software Engineering</div>
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
                                <div className="year">2024 - 2026</div>
                                <ul>
                                    <li>Cloud-Native Computing</li>
                                    <li>Automotive and Autonomous Systems</li>
                                    <li>Neural Networks and Reinforcement Learning</li>
                                    <li>Advanced Programming in C++ and Python</li>
                                    <li>Master's Thesis: Reinforcement Learning Applied to Conflict Resolution in Upper Airspace</li>
                                </ul>

                                 <div className='graduation-section'>
                                    <div className="svg-section"><img src={graduation} /></div>
                                    <div className="graduation">Master of Science (M.Sc.) - Note: 2.0</div>
                                </div>

                                <div className="certificats" onClick={() => setIsModalOpenOST(true)}>Read more</div>
                            </div>
                        }

                        {
                            selectedUni == 'uy1' && 
                            <div className="content">
                                 <div className="uni-fac">
                                    <div className="name">University of Yaounde 1</div>
                                    <div className="fac">Bachelor, Software Engineering</div>
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

                                <div className='graduation-section'>
                                    <div className="svg-section"><img src={graduation} /></div>
                                    <div className="graduation">Bachelor of Science (B.Sc.) - Note: 1.9</div>
                                </div>

                                <div className="certificats" onClick={() => setIsModalOpenUY1(true)}>Read more</div>
                            </div>
                        }
                </div>

                <ReadMoreModal
                    isOpen={isModalOpenUY1}
                    onClose={() => setIsModalOpenUY1(false)}
                    title="Bachelor of Science (B.Sc.) in Software Engineering"
                    subtitle="University of Yaoundé I • 2019 - 2020"
                    description="Key subjects and skills covered during my bachelor's degree."
                    items={educationDetailUY1}
                />

                <ReadMoreModal
                    isOpen={isModalOpenOST}
                    onClose={() => setIsModalOpenOST(false)}
                    title="Master of Science (M.Sc.) in Systems and Information Engineering"
                    subtitle="Ostfalia University of Applied Sciences • 2024 - 2026"
                    description="Key subjects and skills covered during my master's degree."
                    items={educationDetailOST}
                />
            </div>
        </div>
    )
}

export default Education