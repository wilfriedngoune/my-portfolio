/* eslint-disable react/prop-types */
import './SingleProject.scss'


function SingleProject ({project}) {
    return(
        <div className='single-project-container'>
            <div className="info-section">
                <div className="logo-title">
                    <div className="logo-container">
                        <img src={"/logos/" + project.logo}  alt="" />
                    </div>
                    <div className="title">{project.name}</div>
                </div>
                <div className="description">{project.description}</div>
                <div className="stacks">{project.stacks}</div>
                <div className="visit" style={{backgroundColor: project.color}} onClick={() => window.location.href = project.link}>Visit</div>
            </div>
            <div className="demo-section">
                <img src="/pc-demo.png" alt="Image of the squellette of pc" />
            </div>
        </div>
    )
}

export default SingleProject