import React from "react";
import "./style.scss";

import AOS from "aos"
import 'aos/dist/aos.css';

AOS.init();

export default function Sobre(){
    return(
        <section id="sobre" className="sobre" data-aos="fade-in">
            <h1>Sobre mim</h1>

            {/*
            <p>Muito prazer me chamo Marcos, atualmente sou um desenvolvedor web front-end. <br/>
            Venho estudando a cerca de 2 anos durante meu ensino médio técnico, tenho feito alguns projetos e possuo nível junior, embora ainda não tenha experiência de trabalho.</p>

            <p> Sou um desenvolvedor front end em busca de trabalho <br/> possuo nível junior embora ainda não tenha experiencia de trabalho.<br/>
             Comecei meus estudos a cerca de dois anos atrás durante meu ensino médio e por esse tempo me aprofundei na utilização de algumas técnologias</p>
            */}

            <p>Muito prazer me chamo Marcos, comecei meus estudos na área da programação durante meu ensino médio técnico na escola FIEB Brasílio Flores de Azevedo <br/> Após um certo tempo, passei a ter interesse pela criação de interfaces e sistemas relacionados a web, dês de então venho estudando e a cada dia tentando aprender mais e mais.</p>

            <p>Recentemente após tanto tempo de estudo quero por todo esse conhecimento aprendido em prática<br/>
            com disposição para continuar aprendendo cada dia mais</p>

            <div className="lights"></div>
            <div className="lights-two"></div>

        </section>
    )
}