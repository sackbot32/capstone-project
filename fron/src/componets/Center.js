import React,{Component} from "react";
import { Home } from "./Home";
import { OtroUrl } from "./OtroUrl";
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import { Route,Link, Routes, BrowserRouter as Router } from "react-router-dom";

export class Center extends Component {
    constructor(props){
        super(props)
        this.state ={
            select:0,
            objetos: this.props.objetos,
            usuario: this.props.usuarios,
            user:[-1,"nombrebase"]
        }
        this.updateState = this.updateState.bind(this) 

    }

    handleCallback = (childData) =>{
        this.setState({user:childData})
    }

    updateState(number){
        this.setState({select:number});
    }
    render(){
        return (
            <div>
                <div> {this.state.user[0] === -1 ? 'Buenos dias, para comprar, logueese' : "Esta logueado como " + this.state.user[0][1]}</div>
                <Router> 
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <Link to="/" class="btn btn-primary" onClick={() => this.updateState(0)}>Home</Link>
                        <Link to="/tienda" class="btn btn-primary" onClick={() => this.updateState(1)}>Tienda</Link>
                        <Link to="/login" class="btn btn-primary" onClick={() => this.updateState(2)}>Login</Link>
                        <Link to="/signin" class="btn btn-primary" onClick={() => this.updateState(3)}>Sign In</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tienda" element={<OtroUrl objetos={this.props.objetos} usuario={this.state.user}/>} />
                        <Route path="/login" element={<Login parentCallback = {this.handleCallback}/>} />
                        <Route path="/signin" element={<SignIn />} />
                    </Routes>
                </Router>
            </div>
            
        )

    }
}