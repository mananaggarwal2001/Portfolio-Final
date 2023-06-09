import React from 'react'
import '../CSS/Projects.css'
const Projects = (props) => {
    const { Projects } = props;
    return (
        <div className='projectContainer'>
            <p className='text-center ' data-aos='fade-left'><span className='projectHeadingName'>Projects</span></p>
            <h3 className='text-center ProjectMainHeading' data-aos='fade-right'>Some of my most recent projects</h3>
            <div class="row row-cols-1 row-cols-md-4 g-4 my-5  mainProjectCardHeading" data-aos='fade-up'>
                {Projects.map((element) => {

                    return <div class="col cardItem">
                        <h5 class="card-title mytitle">{element.name}</h5>
                        <div className="overlayClass">
                            <a href={element.githubLink} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                            {element.applicationLink !== null ?
                                <a href={element.applicationLink} target="_blank" rel='noreferrer'><i class="fa-sharp fa-solid fa-link"></i></a> : null
                        }
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects