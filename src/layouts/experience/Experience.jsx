/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import ReadMoreModal from '../../components/read-more-modal/ReadMoreModal';
import './Experience.scss';


function Experience(){
        const [isModalOpenTyrex, setIsModalOpenTyrex] = useState(false);
        const [isModalOpenDLR, setIsModalOpenDLR] = useState(false);
    
       const experienceDetailTyrex = [
        {
            title: "UI/UX Design",
            description:
            "Designing intuitive, responsive, and user-friendly interfaces using Figma, with a focus on usability and user experience.",
        },
        {
            title: "Full-Stack Web Development",
            description:
            "Building responsive React.js applications, developing RESTful APIs with Node.js and Express.js, and managing MongoDB and SQL databases.",
        },
        {
            title: "Agile Development & Team Collaboration",
            description:
            "Working in Agile/Scrum teams, managing tasks through sprints, and participating in daily stand-ups, sprint planning, and retrospectives.",
        },
        {
            title: "DevOps & Application Maintenance",
            description:
            "Building, testing, deploying, and maintaining web applications on servers, ensuring reliability, performance, and continuous improvement.",
        },
        ];
    
        const experienceDetailDLR = [
        {
            title: "Frontend Development & Air Traffic Management",
            description:
            "Designing and developing safety-critical web interfaces to support air traffic controllers in monitoring and decision-making.",
        },
        {
            title: "Python Development & Traffic Data Analysis",
            description:
            "Developing standalone Python applications to process, analyze, and visualize large volumes of real-world air traffic data.",
        },
        {
            title: "Data Science & Reinforcement Learning",
            description:
            "Preprocessing and analyzing air traffic data, and training reinforcement learning agents for aircraft conflict resolution.",
        },
        {
            title: "Scientific Research & Publications",
            description:
            "Conducting literature reviews, exploring innovative approaches, and writing scientific papers for academic conferences.",
        },
        ];
    return(
        <div className='experience-container'>
            <div className="experience-wrapper">
                <div className="single-experience">
                    <img src={import.meta.env.BASE_URL + "/tyrexdigital.png"} className = 'logo' alt="" />

                    <div className="other-info">
                        <div className="work-title">Fullstacks Developer & Designer</div>
                        <div className="name-type">
                            <div className="name">Tyrex Digital</div>
                            <div>•</div>
                            <div className="type">Full time</div>
                        </div>
                        <div className="time">March 2022 - August 2023</div>
                        <p className="description">Working in this company has really taught me about collaboration and communication between colleagues. I also learned how to build good interfaces with good development practices.</p>
                        <div className="certificats" onClick={() => setIsModalOpenTyrex(true)}>Read more</div>
                    </div>
                </div>

                <div className="single-experience">
                    <img src={import.meta.env.BASE_URL + "/dlr_logo.png"} className = 'logo' alt="" />

                    <div className="other-info">
                        <div className="work-title">Developer & AI Researcher</div>
                        <div className="name-type">
                            <div className="name">German Aerospace - DLR</div>
                            <div>•</div>
                            <div className="type">Full time</div>
                        </div>
                        <div className="time">March 2025 - Now</div>
                        <p className="description">I design and develop applications and tools to assist air traffic controllers in their daily operations, including tasks such as conflict detection and resolution.</p>
                        <div className="certificats" onClick={() => setIsModalOpenDLR(true)}>Read more</div>

                    </div>
                </div>

                 <ReadMoreModal
                    isOpen={isModalOpenDLR}
                    onClose={() => setIsModalOpenDLR(false)}
                    title="Developer & AI Researcher"
                    subtitle="German Aerospace Center (DLR) • March 2025 - Present"
                    description="I design and develop applications and tools to assist air traffic controllers in their daily operations, including tasks such as conflict detection and resolution."
                    items={experienceDetailDLR}
                />

                <ReadMoreModal
                    isOpen={isModalOpenTyrex}
                    onClose={() => setIsModalOpenTyrex(false)}
                    title="Fullstack Developer and UI&UX Designer"
                    subtitle="Tyrex Digital Group • March 2022 - August 2023"
                    description="Working in this company has really taught me about collaboration and communication between colleagues. I also learned how to build good interfaces with good development practices."
                    items={experienceDetailTyrex}
                />
            </div>
        </div>
    )
}

export default Experience