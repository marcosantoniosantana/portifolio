import {useState} from "react"
import "./style.scss"

export default function Header() {

    return(
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li ><a href="#sobre">Sobre</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                </ul>
            </nav>
        </header>
    )
}