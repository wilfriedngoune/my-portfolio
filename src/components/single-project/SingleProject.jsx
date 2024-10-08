/* eslint-disable react/prop-types */
import './SingleProject.scss'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function SingleProject ({project}) {
    return(
        <div className='single-project-container'>
            <div className="info-section">
                <div className="logo-title">
                    <div className="logo-container">
                        <img src={"/logos/" + project.logo}  alt={project.logo} />
                    </div>
                    <div className="project-title">{project.name}</div>
                </div>
                <p className="description">{project.description}</p>
                <div className="stacks">{project.stacks}</div>
                <div className="visit" style={{backgroundColor: project.state == 'prod' ? project.color : 'gray'}} onClick={() => project.state == 'prod' && window.open(project.link, '_blank')}>Visit {project.state === 'dev' && '(Still on dev...)'}</div>
            </div>
            <div className="demo-section">
               <Carousel
               showArrows={false}
               showIndicators={false}
               showStatus={false}
               showThumbs={false}
               infiniteLoop={true}
               autoPlay={true}
               dynamicHeight={true}
               >
                {
                    project.gallery.map((image, index) => 
                    <div key={index}>
                        <img src={"/demos" + image} alt={image} style={{objectFit: 'contain !important'}} />
                    </div> )
                }
               </Carousel>
            </div>
        </div>
    )
}

export default SingleProject