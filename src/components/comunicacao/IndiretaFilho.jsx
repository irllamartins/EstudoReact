import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props =>{
    const cb = props.quandoClicar
    const min = 20
    const max = 50
    const gerarIdade = () =>parseInt(Math.random()*(max-min))+min
    const gerarNerd = () => Math.radom() > 0.5 
    return(
        <div>
            <div>Filho</div>
             <button onClick={_=>cb('Joao',gerarIdade(),gerarNerd())}>Fornecer informações</button>
        </div>
       
    )
}