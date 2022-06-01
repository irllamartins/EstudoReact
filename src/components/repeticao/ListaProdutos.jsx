import React from "react";
import produtos from "../../data/produtos";
import './ListaProdutos.css'
export default props => {
function getRow(){
    //transforma objeto de aluno em trechos de jsx
    return  produtos.map((produtos,i) => {
        return (
            <tr className={i%2!==0?'Par':'Impar'}>
                <td>{produtos.id}</td>
                <td>{produtos.nome}</td>
                <td>R$ {produtos.preco.toFixed(2)}</td>
            </tr>

        )
    })
}
    return (
        <div className="TabelaProdutos">
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {getRow()}
                </tbody>
                 
            </table>
        </div>
    )
}