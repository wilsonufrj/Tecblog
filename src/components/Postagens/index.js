import React from 'react'
import './style.css'

const Postagens = (props)=>{
    return(

        <div className='postagens'>
            <h2>{props.titulo}</h2>
            <span className="data-postagem">Postado dia 2 de Janeiro</span>
            <img width="620px" src={props.img} alt=""></img>
            <p>Lorem impsum Lorem impsum Lorem impsumLorem impsum Lorem impsum Lorem impsum</p>
            <a href="./Home">Leia Mais</a>
          </div>

    );
}

export default Postagens