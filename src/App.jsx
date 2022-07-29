import React from 'react'

import './App.css'
import Usuarioinfo from './components/condicional/Usuarioinfo'
import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import ListaAluno from './components/repeticao/ListaAluno'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from "./components/formulario/Input"
export default ()=> {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
            <Card titulo="#11 - Componente controlado" color="#BC8F8F">
                   
                   <Input/>
                  </Card>
                <Card titulo="#10 - Comunicação indireta" color="#32CD32">
                   
                   <IndiretaPai/>
                  </Card>
                <Card titulo="#9 - Comunicação direta" color="#8B008B">
                   
                 <DiretaPai/>
                </Card>
                <Card titulo="#8 - Rederização condicional" color="#FF6347">
                    <ParOuImpar numero={10}></ParOuImpar>
                    <Usuarioinfo usuario={{nome:"Joao"}}></Usuarioinfo>
                 
                </Card>
                <Card titulo="#7 - Repetição(desafio)" color="#556B2F">
                    <ListaProdutos></ListaProdutos>
                </Card>
                <Card titulo="#6 - Repetição" color="#950">
                    <ListaAluno></ListaAluno>
                </Card>
                <Card titulo="#5 - Componentes com filhos" color="#FFD700">
                     {/*<Familia sobrenome="Martins">
                       <FamiliaMembro nome="Clara" sobrenome="Ferreira"></FamiliaMembro>
                        <FamiliaMembro nome="irlla" ></FamiliaMembro>
    <FamiliaMembro nome="isley" ></FamiliaMembro>
                    </Familia>*/}
                </Card>
                <Card titulo="#4 - DesafioAleatorio" color="#800000">
                    <Aleatorio min={0} max={10} />
                </Card>
                <Card titulo="#3 - Fragmento" color="#FF69B4">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - ComParametro" color="#4B0082">
                    <ComParametro
                        titulo="Situação aluno"
                        aluno="Pedro"
                        nota={9.2} />

                </Card>
                <Card titulo="#1 - Situação aluno" color="#F4A460">
                    <Primeiro />

</Card>
            </div>



        </div>


    );
}