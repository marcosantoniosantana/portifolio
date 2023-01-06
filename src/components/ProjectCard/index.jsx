import React from "react";
import "./style.scss"

export default function CardProject(param){

    const style = {
        background:{
            backgroundImage: `url(${param.image})`
        }
    }

    return(
        <figure className="card" style={style.background}>

        <div className="description">
            <span>{param.title}</span>
            <p>{param.content}</p>

            <div className="view-buttons">

                <a href={param.view}>
                    <span>Ver Projeto</span>
                </a>

                <a href={param.github}>
                    <span>Ver GitHub</span>
                </a>

            </div>

            <div className="tech-area"></div>

        </div>

    </figure>
    );
}
