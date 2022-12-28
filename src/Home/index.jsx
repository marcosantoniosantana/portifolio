import React, {lazy} from "react";
import './style.scss';
import Header from "../components/Header"
import Inicio from "../components/Inicio";
import Sobre from "../components/Sobre";
import Skills from "../components/Skills";

export default function Home(){
    return(
        <div>
            <Header/>
            <Inicio/>
            <Sobre/>
            <Skills/>
            {/*<h1>Aqui será meu portifólio</h1>*/}
        </div>
    )
}