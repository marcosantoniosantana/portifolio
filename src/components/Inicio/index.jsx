import {useState} from "react"
import "./style.scss"
import {AiFillLinkedin, AiOutlineGithub, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import {MdEmail} from "react-icons/md"

import AOS from "aos"
import 'aos/dist/aos.css';

import {Link} from "react-router-dom"

AOS.init();
AOS.refresh();

export default function Inicio(){
    return(
        <section id="inicio" className="inicio">
            
            <div className="welcome">
                <h1 className="my-name-hidden">Marcos Antonio</h1>

                <h1 className="my-name" data-aos="fade-up" data-aos-duration="1000">Marcos Antonio</h1>

                <h2 className="title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">Desenvolvedor <span className="web-letter">W</span>eb  <span className="front-end-logo"> <AiOutlineLeft className="arrows"/>Front-end <AiOutlineRight className="arrows"/> </span></h2>

            </div>

            <div className="contact">

                <ul className="contact-infs">
                    <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700"> <a href="https://linkedin.com/in/marcoss-antonio"><AiFillLinkedin/></a></li>

                    <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="850"> <a href="https://github.com/marcosantoniosantana"> <AiOutlineGithub/></a></li>

                    <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000"><a><MdEmail/></a></li>
                </ul>

            </div>

        </section>
    )
}