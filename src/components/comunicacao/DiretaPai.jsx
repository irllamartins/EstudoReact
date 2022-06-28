import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return(
        <div>
            <DiretaFilho texto="oi,filho 1" numero={20} bool={true}/>
            <DiretaFilho texto="oi,filho 2" numero={120} bool={false}/>

        </div>
    )
}