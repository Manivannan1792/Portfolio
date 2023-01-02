import React, { useEffect } from 'react';
import "./Project.css";
import Aos from 'aos';

function Project() {

    useEffect(() => {
        Aos.init({
            duration: 1500,
        });
    }, [])

    const project = [{
        "title": "Flight Ticket Booking",
        "description": "Flight ticket booking app was built using Javascript,React,Node.js,bootstrapt and MongoDB",
        "github_link": "https://github.com/Manivannan1792/Flight-booking-app-FE.git",
        "site_link": "https://flight-ticket-booking.netlify.app/",
    }, {
        "title": "Inventory Management",
        "description": "This app built using Javascript,React,Redux, Mongoose,Node.js,and MongoDB.",
        "github_link": "https://github.com/Manivannan1792/IM-FE.git",
        "site_link": "https://shopinventorymanagement.netlify.app/"
     
    }, {
        "title": "Daily dress color suggestion",
        "description": "Where users can select and save their favorites dress color and bulit using Javascript,React,Mongoose,Node.js,and MongoDB.",
        "github_link": "https://github.com/Manivannan1792/Dress-Suggestion.git",
        "site_link": "https://daily-dress-suggestion-for-women.netlify.app/",
       
    }, {
        "title": "Task submission portal",
        "description": "This app built using Javascript,React,Redux, Mongoose,Node.js,and MongoDB. ",
        "github_link": "https://github.com/Manivannan1792/Task-Submission.git",
        "site_link": "https://task-submission-portal.netlify.app/"
        
    },{
        "title": "Music app",
        "description": "This music app built using Javascript, React, Mongoose, Tailwind,NodeJS and MongoDB.",
        "github_link": "https://github.com/Manivannan1792/Music-player.git",
        "site_link": "https://online-music-app.netlify.app/"
        
    },{
        "title": "M player",
        "description": "Where user can listen their favorite songs free, built using Javascript,React.",
        "github_link": "https://github.com/Manivannan1792/Music-player.git",
        "site_link": "https://music-listener-app.netlify.app/"
        
    },{
        "title": "Youtube clone",
        "description": "This youtube app built  React,javascript",
        "github_link": "https://github.com/Manivannan1792/Youtube-clone.git",
        "site_link": "https://youtube-application.netlify.app/"
    }]


    return (
        <div className="container mb-3">
            <h2 className='mb-3' style={{color:'white'}} data-aos="fade-in">Projects:</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-in">
                {
                    project.map(obj => {
                        return (
                            <div className="col">
                                <div className="card h-100" id="project_card">
                                    <div className="card-body">
                                        <h5 className="card-title">{obj.title}</h5>
                                        <p className="card-text">{obj.description}</p>
                                    </div>
                                    <div className="web_link text-center">
                                        <div className="row">
                                            <div className="col col-lg-6">
                                                <a className="btn" id="git_btn" href={obj.github_link} target="_blank" rel="noreferrer noopenner">
                                                    Git <i className="fab fa-git-alt"></i>
                                                </a>
                                            </div>
                                            <div className="col col-lg-6">
                                                <a className="btn" id="site_btn" href={obj.site_link} target="_blank" rel="noreferrer noopenner">
                                                    View live <i className="fab fa-chrome"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    )
}

export default Project
