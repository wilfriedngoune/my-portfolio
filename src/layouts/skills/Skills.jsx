/* eslint-disable react/no-unescaped-entities */
import SingleStack from '../../components/single-stack/SingleStack';
import './Skills.scss';

function Skills(){
    const stacks =  [
        {
            name: 'JavaScript',
            logo : 'js.svg',
            linePosition: 'left', 
            lineWidth : 50,
            lineInclinaison : 30,
            boxPosition : '-40px 0 0 50px',
            lineTopOffset : 30,
        },

        {
            name: 'Figma',
            logo : 'figma.svg',
            linePosition: 'right', 
            lineWidth : 100,
            lineInclinaison : -50,
            boxPosition : '0 0 0 -100px',
            lineTopOffset : 40,
        },
        {
            name: 'Node JS',
            logo : 'node.svg',
            linePosition: 'right', 
            lineWidth : 130,
            lineInclinaison : 50,
            boxPosition : '-200px 0 0 -130px',
            lineTopOffset : 50,
        },
        {
            name: 'Mongo DB',
            logo : 'mongodb.svg',
            linePosition: 'left', 
            lineWidth : 130,
            lineInclinaison : -30,
            boxPosition : '-150px 0 0 50px',
            lineTopOffset : 40,
        },
        {
            name: 'Git',
            logo : 'git.svg',
            linePosition: 'left', 
            lineWidth : 110,
            lineInclinaison : 55,
            boxPosition : '50px 0 0 10px',
            lineTopOffset : 30,
        },
        {
            name: 'React JS',
            logo : 'react.svg',
            linePosition: 'right', 
            lineWidth : 140,
            lineInclinaison : 10,
            boxPosition : '-110px 0 0 -180px',
            lineTopOffset : 40,
        },

    ]
    return(
        <div className='skills-container'>
            <div className="skills-wrapper">
                <img src="/stacks/brain.svg" className='brain' alt="Brain" />
                {
                    stacks.map((stack, index) => <div key={index}><SingleStack stack={stack}/></div>)
                }
            </div>
        </div>
    )
}

export default Skills