import React,{Component} from 'react'
import {buyItem} from "./Api";

export class OtroUrl extends Component {
    constructor(props){
        super(props)
        this.state ={
            objetos: this.props.objetos,
            usuario:this.props.usuario
        }
        this.buy = this.buy.bind(this)
    }

    buy(idProd){
        alert("ID de usuario:" + this.state.usuario[0][0] + " ID de producto:" + idProd)
        buyItem(this.state.usuario[0][0],idProd);

    }
    
    render(){
        return (
            <div>
                <p>Tienda</p>
                <p>Datos: {(typeof this.state.objetos === 'undefined') ? ("loading") : this.state.objetos + ""}</p>
                <table>
                    { 
                    this.state.objetos.map((value) => {
                            return (<div>
                                <tr>
                                    <td style={{color: "red"}}key={value[0]}>{value[1]}</td> <br></br> {this.state.usuario[0] === -1 ? 'Buenos dias, para comprar, logueese' : <button class="btn btn-primary" onClick={() => this.buy(value[0])}>Comprar</button>}
                                </tr>
                            </div> )
                        
                    })}
                </table>
            </div>
        )
        
    }
}