import React,{useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props =>{
    const [nome,setNome] =useState('?')
    const [idade,setIdade] =useState(0)
    const [nerd,setNerd] =useState('?')
    function fonecerInformacoes(nome,idade,nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
        console.log(nome,idade,nerd) 
    }

    return(
        <div>
            <div>
                <span>{nome}</span>
                <span>{idade}</span>
                <span>{nerd ? "Verdade":"Falso"}</span>
             
            </div>
            <IndiretaFilho quandoClicar={fonecerInformacoes}></IndiretaFilho>
        </div>
    )
}