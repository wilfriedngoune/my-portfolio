/* eslint-disable react/no-unescaped-entities */
import SingleProject from '../../components/single-project/SingleProject';
import './Project.scss';
import back from '../../assets/back.svg'
import { useRef, useState } from 'react';

function Project(){
    const [actualProject, setActualProject] = useState(0)
    const projects = [
        {
            name : "Studisjob",
            description : "A marketplace for flexible local jobs, helping students find paid opportunities and making it easy for people to get help with everyday tasks.",
            link : "https://studisjob.de/",
            gallery : ['/studisjob/1.png', '/studisjob/2.png', '/studisjob/3.jpeg', '/studisjob/4.jpeg'],
            logo : 'studisjob.png',
            color : 'blue',
            stacks : "#TypeScript #SCSS #ReactJS #Django #SQL",
            state : 'prod'
        },

        {
            name : "MyDE",
            description : "An ecosystem to help you prepare for the TelC C1 German language exam. It contains hints for better preparation and exercises for practice.",
            link : "https://myydee.com",
            gallery : ['/myde/1.png', '/myde/2.png', '/myde/3.png', '/myde/4.png', '/myde/5.png', '/myde/6.png', '/myde/7.png'],
            logo : 'myde.png',
            color : '#273be2',
            stacks : "#JavaScript #Axios #SCSS #ReactJS #NodeJS #Express #MongoDB",
            state : 'prod'
        },

        {
            name : "Sawyer Robot",
            description : "We developed the Bamboleo game using a Sawyer robot, which detects and picks up objects from a balancing board. Using computer vision and inverse kinematics, the robot selects and removes objects while maintaining the board's balance",
            link : "#",
            gallery : ['/bamboleo/1.png', '/bamboleo/2.png', '/bamboleo/3.png', '/bamboleo/4.png'],
            logo : 'bamboleo.png',
            color : 'red',
            stacks : "#Python #ROS2 #Linux #Yolo Model #Computer Vison",
            state : 'project'
        },

        {
            name : "Library Assistance",
            description : "Using the Pepper robot, I developed a library assistant that welcomes visitors, helps them find books by checking availability and guiding them to their locations, and notifies library staff via Discord in case of issues.",
            link : "#",
            gallery : ['/library/1.png', '/library/2.png', '/library/3.png'],
            logo : 'bamboleo.png',
            color : 'red',
            stacks : "#Python #Discord #LLM #Flask #SQLite Database",
            state : 'project'
        },

        {
            name : "Autonomous Aircraft",
            description : "I trained an aircraft agent using reinforcement learning to navigate safely while avoiding other aircraft and restricted zones, optimizing flight paths to reduce travel time, CO₂ emissions, and fuel consumption.",
            link : "#",
            gallery : ['/rlCompetition/1.png', '/rlCompetition/2.png', '/rlCompetition/3.png'],
            logo : 'rlComp.png',
            color : 'blue',
            stacks : "#RL #PPO #MarkovDecisionProcess",
            state : 'project'
        },

        
    ]
    const projectRef = useRef(null)
    const handleNext = () =>  {
        const element = projectRef.current
        element.setAttribute('class', 'display-none')
        setTimeout(() => {
            if(actualProject < projects.length-1){
                setActualProject(actualProject+1)
            }
            element.setAttribute('class', 'come-from-rigth')
        }, 300)
    }

    const handlePrevious = () => {
        const element = projectRef.current
        element.setAttribute('class', 'display-none')
        setTimeout(() => {
            if(actualProject > 0){
                setActualProject(actualProject-1)
            }
            element.setAttribute('class', 'come-from-left')
        }, 300)
    }
    return(
        <div className='projet-container'>
            <div className="projet-wrapper">
                <div className={actualProject > 0 ? "round-box swap-left-icon" : "swap-left-icon"}>
                    {actualProject > 0 && <img onClick={handlePrevious} src={back} className='nav-svg' alt="Previous svg" />}
                </div>
                <div ref={projectRef} className="project">
                    <SingleProject project={projects[actualProject]} />
                </div>
                <div className={actualProject < projects.length-1 ? "round-box swap-rigth-icon" : "swap-rigth-icon"}>
                    {actualProject < projects.length-1 && <img onClick={handleNext} src={back} className='nav-svg next' alt="Next svg" />}
                </div>
            </div>
        </div>
    )
}

export default Project