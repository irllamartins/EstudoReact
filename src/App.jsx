import React from 'react'

import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import './App.css'

export default ()=> {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#4 - DesafioAleatorio" color="#008">
                    <Aleatorio min={0} max={10} />
                </Card>
                <Card titulo="#3 - Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - ComParametro">
                    <ComParametro
                        titulo="Situação aluno"
                        aluno="Pedro"
                        nota={9.2} />

                </Card>
                <Card titulo="#1 - Situação aluno">
                    <Primeiro />

</Card>
            </div>



        </div>


    );
}