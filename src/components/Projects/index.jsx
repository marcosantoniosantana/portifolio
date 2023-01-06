import React from "react"
import "./style.scss"
import Imagem from "/imagens/projects/find_the_cube.png"
import Sorteio from "/imagens/projects/sorteio.png"

import CardProject from "../ProjectCard"

export default function Projects(){
    return(
        <section id="projetos" className="projects">
            <h1>PROJETOS</h1>
            
            <div className="project-area">

{/*
                <figure className="project-card">

                    <div className="description">
                        <span>Encontre o cubo</span>
                        <p>Jogo para procurar um cubo escondido em uma das 3 cartas</p>

                        <div className="view-buttons">

                            <a href="https://find-the-cube.vercel.app/">
                                <span>Ver Projeto</span>
                            </a>

                            <a href="https://github.com/marcosantoniosantana/find-the-cube">
                                <span>Ver GitHub</span>
                            </a>

                        </div>

                        <div className="tech-area"></div>

                    </div>

                </figure>
    */}
                <CardProject title="Encontre o cubo"
                image={Imagem}
                content="Jogo para encontrar um cubo escondido em uma das 3 cartas presentes"
                view={`https://find-the-cube.vercel.app/`}
                github={`https://github.com/marcosantoniosantana/find-the-cube`}/>

                <CardProject title="Sorteio"
                image={Sorteio}
                content="Sistema que realiza o sorteio aleatório dos itens inseridos"
                view={`https://marcosantoniosantana.github.io/sorteio/`}
                github={`https://github.com/marcosantoniosantana/sorteio`}/>
               

            </div>

        </section>
    )
}