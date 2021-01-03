import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Postagens from './components/Postagens';
import img1 from "./img/imagem1.jpg"
import img2 from "./img/imagem2.jpg"
import img3 from "./img/imagem3.jpg"


function App() {
  return (
        <body>
           <Navbar/>

          <div id='area-principal'>

            <div id='area-postagens'>
              
              <Postagens
                titulo="Postagem 1"
                img = {img1}
              />
              <Postagens
                titulo = "Postagem 2"
                img ={img2}
              />
              <Postagens
                titulo = "Postagem 3"
                img ={img3}
              />
              
            </div>

            <div id='area-lateral'>

                <div className='conteudo-lateral'>
                  <h3>Postagens Recentes</h3>

                  <div className="postagem-lateral">
                    <p>Lorem inpsum Lorem inpsum Lorem inpsumLorem inpsum</p>
                    <a href="./">Leia Mais</a>
                  </div>
                  
                  <div className="postagem-lateral">
                    <p>Lorem inpsum Lorem inpsum Lorem inpsumLorem inpsum</p>
                    <a href="./">Leia Mais</a>
                  </div>
                
            </div>

            <div className='conteudo-lateral'>
                  <h3>Categorias</h3>
                    <a href='./home'>Home</a> 
                </div>
            </div>

            <div id="rodape">
              Todos os direitos reservados
            </div>
          </div>
          
        </body>
  );
}

export default App;
