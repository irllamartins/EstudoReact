export default props =>{
    //retorna um array com info dos filhos
    const elseChild = props.children.filter( child=>{
            return child.type && child.type.name ==='Else'
        }
    )[0]
    //retorna todos filhos que não é Else
    const ifChildren = props.children.filter(child=>{
        return child !==elseChild
    })

    if(props.test){
        //return props.children
        return ifChildren
    }
    else if(elseChild){
        return elseChild
    } 
    else{
        return false
    }
}
export const Else = props => props.children