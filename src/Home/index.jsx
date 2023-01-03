import React, {lazy} from "react";
import './style.scss';
import Header from "../components/Header"
import Inicio from "../components/Inicio";
import Sobre from "../components/Sobre";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home(){
    return(
        <div>
            <Header/>
            <Inicio/>
            <Sobre/>
            <Skills/>
            <Projects/>
            {/*<h1>Aqui será meu portifólio</h1>*/}
        </div>
    )
}