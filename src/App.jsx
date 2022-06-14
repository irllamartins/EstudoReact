import React from 'react'

import Usuarioinfo from './components/condicional/Usuarioinfo'
import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import ListaAluno from './components/repeticao/ListaAluno';
import ListaProdutos from './components/repeticao/ListaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import './App.css'

export default ()=> {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#8 - Rederização condicional" color="#430">
                    <ParOuImpar numero={10}></ParOuImpar>
                    <Usuarioinfo usuario={{nome:"Joao"}}></Usuarioinfo>
                 
                </Card>
                <Card titulo="#7 - Repetição(desafio)" color="#030">
                    <ListaProdutos></ListaProdutos>
                </Card>
                <Card titulo="#6 - Repetição" color="#950">
                    <ListaAluno></ListaAluno>
                </Card>
                <Card titulo="#5 - Componentes com filhos" color="#570">
                     {/*<Familia sobrenome="Martins">
                       <FamiliaMembro nome="Clara" sobrenome="Ferreira"></FamiliaMembro>
                        <FamiliaMembro nome="irlla" ></FamiliaMembro>
    <FamiliaMembro nome="isley" ></FamiliaMembro>
                    </Familia>*/}
                </Card>
                <Card titulo="#4 - DesafioAleatorio" color="#008">
                    <Aleatorio min={0} max={10} />
                </Card>
                <Card titulo="#3 - Fragmento" color="#015">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - ComParametro" color="#031">
                    <ComParametro
                        titulo="Situação aluno"
                        aluno="Pedro"
                        nota={9.2} />

                </Card>
                <Card titulo="#1 - Situação aluno" color="#102">
                    <Primeiro />

</Card>
            </div>



        </div>


    );
}