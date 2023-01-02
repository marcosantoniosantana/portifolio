import {DiHtml5, DiCss3, DiJsBadge, DiSass, DiReact, DiGit } from "react-icons/di";
import "./style.scss"

import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init();

export default function Skills(){
    return(
        <section id="skills" className="skills" data-aos="start-effect">

            <h2>Skills</h2>

            <div className="skills-container">

                <figure className="skill-format">
                    <DiHtml5 className="skills-icon"/>
                    <span>HTML</span>
                </figure>

                <figure className="skill-format">
                    <DiCss3 className="skills-icon"/>
                    <span>CSS</span>
                </figure>

                <figure className="skill-format">
                    <DiJsBadge className="skills-icon"/>
                    <span>JAVASCRIPT</span>
                </figure>

                <figure className="skill-format">
                    <DiSass className="skills-icon"/>
                    <span>SASS</span>
                </figure>

                <figure className="skill-format">
                    <DiReact className="skills-icon"/>
                    <span>REACT</span>
                </figure>

                <figure className="skill-format">
                    <DiGit className="skills-icon"/>
                    <span>GIT</span>
                </figure>
            </div>
        </section>
    )
}