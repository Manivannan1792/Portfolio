import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from './Image.jpg'
import "./About.css"
import Aos from 'aos';
import env from '../settings'


function About() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])

    const exp = [
        {
            "numbers": 5,
            "title": "Full-Stack Projects"
        },
        {
            "numbers": 10,
            "title": "Projects"
        }, {
            "numbers": 6,
            "title": "Months Learning"
        }]

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="about-image col-lg-4 text-center">
                        <img data-aos="zoom-in" alt="Mani" src={Image} />
                    </div>
                    <div className="about-detail col-lg-8" data-aos="zoom-in">
                        <h3>
                            Hey, Welcome to Mani's Portfolio Website!
                        </h3>
                        <p>
                            I'm Manivannan R, I have completed my Master's Degree in MBA and Bachelor's Degree in B.E(ECE)
                            and residing in Chennai. I am a person who has high passion in
                            Technologies.
                        </p>
                        <p>
                            I have been Coding for around 6 months now. I have huge interest in Web development
                            and acquired knowledge in full stack applications using MERN stack and created websites/web applications.  
                       </p>
                        <p>
                            I have a burning desire to master the Technologies I learn and become one of the
                            TOP developer and I am working towards it!
                        </p>
                        <p>
                            I like to do creative and challenging things to utilize my full potential.
                        </p>
                        <div className='about-buttons'>
                            <Link className="btn m-4" to="/contact">
                                Connect <i className="fab fa-connectdevelop" aria-hidden="true"></i>
                            </Link>
                            <a className="btn m-4" href={env.resume} target="_blank" rel="noreferrer noopener">
                                Resume <i className="fas fa-cloud-download-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div className="preview_box text-center mt-5 mb-5" data-aos="zoom-in">
                        <h1>Experience:</h1>
                        <div className="row">
                            {
                                exp.map(obj => {
                                    return (
                                        <div className="col col-lg-4" id="exp_col">
                                            <div className="box mt-2 mb-2">
                                                <h1>{obj.numbers}+</h1>
                                                <h6>{obj.title}</h6>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
