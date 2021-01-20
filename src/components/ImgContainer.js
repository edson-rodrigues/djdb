import React, { useState } from 'react'
import './ImgContainer.css'


//função auxiliar pra gerar pseudoaleatoriedade
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const ImgContainer = ()=> {

    const bichos = ["aguia.JPG", "avestruz.JPG", "borboleta.JPG", "burro.JPG", "cabra.JPG", "cachorro.JPG", "carneiro.JPG", "cavalo.JPG", "cobra.JPG", "coelho.JPG", "elefante.JPG", "galo.JPG", "gato.JPG", "jacare.JPG", "leao.JPG", "macaco.JPG", "pavao.JPG", "peru.JPG", "porco.JPG", "tigre.JPG", "touro.JPG", "urso.JPG", "veado.JPG", "vaca.JPG"]

    const [imgURL, setImgURL] = useState("inicial.jpg")

    const gerarPalpite = () =>{
        setImgURL(bichos[getRandomInt(0, bichos.length)])
     }

    return (
    <div>
        <div className="imgCtn">
            <img src={imgURL} />
        </div>
        <div>
            <button onClick={gerarPalpite}>Gerar Palpite</button>
        </div> 
    </div>   
    )
}

export default ImgContainer

