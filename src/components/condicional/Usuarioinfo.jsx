import React from 'react'
import If,{Else} from './If'
export default props =>{
    const usuario = props.usuario || {}
    return (
        <div>
           {/* <If test={usuario && usuario.nome}> Seja bem vindo, <strong>{props.usuario.nome}</strong>!</If>
            <If test={!usuario || !usuario.nome}> Seja bem vindo, <strong>usuario anonimo</strong>!</If>*/}
            <If test={usuario && usuario.nome}> Seja bem vindo, <strong>{props.usuario.nome}</strong>!
                <Else>
                Seja bem vindo, <strong>usuario anonimo</strong>!
                </Else>
            </If>
            
        </div>
    )
}