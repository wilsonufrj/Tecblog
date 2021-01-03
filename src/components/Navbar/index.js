import React from 'react'
import './style.css'

export default function Navbar(){
    return(
           <div id="area-cabecalho"> 
              <div id='area-logo'>
                <h1>Tec<span className="branco">Blog</span></h1>
              </div>
              <div id='area-menu'>
                  <a href='index.html'>Home</a>
                  <a href='jogos.html'>Jogos</a>
                  <a href='celulares.html'>Celulares</a>
                  <a href='informatica.html'>Informatica</a>
              </div>
           </div>
    );
}