import {useState} from "react"
import "./style.scss"

export default function Header() {

    return(
        <header className="header">
            <nav>
                <ul>
                    <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300"><a href="#inicio">Inicio</a></li>

                    <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700"><a href="#sobre">Sobre</a></li>
                    
                    <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900"><a href="#skills">Skills</a></li>
                    
                    <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000"><a href="#projetos">Projetos</a></li>
                </ul>
            </nav>
        </header>
    )
}