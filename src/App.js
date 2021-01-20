import React, { useState } from 'react'
import ImgContainer from './components/ImgContainer'

const App = (props) =>{
    return (
       <div>
        <div>
            <h1>Gerador de Palpites para o jogo do bicho</h1>
        </div>   
        <ImgContainer />
       </div> 
    )
}

export default App