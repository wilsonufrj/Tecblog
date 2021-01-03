import React from 'react';
import './App.css';
import img1 from "./img/imagem1.jpg"
import img2 from "./img/imagem2.jpg"
import img3 from "./img/imagem3.jpg"


function App() {
  return (
        <body>
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

          <div id='area-principal'>
            <div id='area-postagens'>

              <div className='postagens'>
                <h2>Titulo Postagem 1</h2>
                <span className="data-postagem">Postado dia 2 de Janeiro</span>
                <img width="620px" src={img1} alt=""></img>
                <p>Lorem impsum Lorem impsum Lorem impsumLorem impsum Lorem impsum Lorem impsum</p>
                <a href="./Home">Leia Mais</a>
              </div>

              <div className='postagens'>
                <h2>Titulo Postagem 2</h2>
                <span className="data-postagem">Postado dia 2 de Janeiro</span>
                <img width="620px" src={img2} alt=""></img>
                <p>Lorem impsum Lorem impsum Lorem impsumLorem impsum Lorem impsum Lorem impsum</p>
                <a href="./Home">Leia Mais</a>
              </div>

              <div className='postagens'>
                <h2>Titulo Postagem 3</h2>
                <span className="data-postagem">Postado dia 2 de Janeiro</span>
                <img width="620px" src={img3} alt=""></img>
                <p>Lorem impsum Lorem impsum Lorem impsumLorem impsum Lorem impsum Lorem impsum</p>
                <a href="./Home">Leia Mais</a>
              </div>
              

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
