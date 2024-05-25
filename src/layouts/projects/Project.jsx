/* eslint-disable react/no-unescaped-entities */
import SingleProject from '../../components/single-project/SingleProject';
import './Project.scss';
import back from '../../assets/back.svg'
import { useRef, useState } from 'react';

function Project(){
    const [actualProject, setActualProject] = useState(0)
    const projects = [
        {
            name : "Alaahza",
            description : "A web application that enables a given African to learn to read, write and communicate in his or her mother tongue. The application is already in production and has several users.",
            link : "https://dictionary.alaahza.com",
            gallery : ['/alaahza/1.png', '/alaahza/2.png', '/alaahza/3.png', '/alaahza/4.png'],
            logo : 'alaahza.png',
            color : '#7A2BCF',
            stacks : "#TypeScript #SCSS #ReactJS #NodeJS #Express #MongoDB",
            state : 'prod'
        },

        {
            name : "MyDE",
            description : "MyDE is a web application to help you prepare for the TelC C1 German language exam. It contains hints for better preparation and exercises for practice.",
            link : "https://myydee.com",
            gallery : ['/myde/1.png', '/myde/2.png', '/myde/3.png', '/myde/4.png', '/myde/5.png', '/myde/6.png', '/myde/7.png'],
            logo : 'myde.png',
            color : '#273be2',
            stacks : "#JavaScript #Axios #SCSS #ReactJS #NodeJS #Express #MongoDB",
            state : 'prod'
        },

        {
            name : "The Village",
            description : "Web application similar to linkedin. Connects profiles with similar characteristics. Whether similar in preference or profession. The application focuses on the field of medicine.",
            link : "",
            gallery : ['/thevillage/1.png', '/thevillage/2.png', '/thevillage/3.png', '/thevillage/4.png'],
            logo : 'thevillage.jpeg',
            color : 'green',
            stacks : "#TypeScript #SCSS #ReactJS #NodeJS #Express #MongoDB",
            state : 'dev'
        }
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