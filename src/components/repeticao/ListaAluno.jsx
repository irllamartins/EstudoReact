import React from "react";
import alunos from '../../data/aluno'
export default props => {

    //transforma objeto de aluno em trechos de jsx
    const alunosLI = alunos.map((aluno) => {
        return (
                <li key={aluno.id}>
                    {aluno.id}) {aluno.nome} = {aluno.nota}
                </li>
            )
    })
    return (
        <div>
            <ul style={{listStyle:'none'}}>
                {alunosLI}
            </ul>
        </div>
    )
}