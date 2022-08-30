import React,{Component} from "react";

export class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:"",
            password:"",
            user:"nada"
        }
        this.logInT = this.logInT.bind(this)
    }

    

    logInT (event) {
        fetch('http://localhost:5000/logIn?name='+ this.state.name + "&pass=" + this.state.password).then(
      res => res.json()
        ).then(
            data => {
                alert(data)
                this.setState({user:data});
                if(data.length !== 0){
                    alert(data)
                    this.props.parentCallback(data);
                } else {
                    alert("ERROR USUARIO NO ENCONTRADO")
                    this.props.parentCallback([-1,"nombrebase"]);
                }
            }
        )
        
        event.preventDefault();
    }
    render(){
        return (
            <div>
                <form method="get" acci onSubmit={v => this.logInT(v)}>
                <label for="user">User:</label><br/>
                <input type="text" id="user" name="user" onChange={(e) => {this.setState({name:e.target.value}); console.log(this.state.name)}}/><br/>
                <label for="password">Password:</label><br/>
                <input type="password" id="password" name="password" onChange={(p) => {this.setState({password:p.target.value}); console.log(this.state.password) }}/><br/>
                <input type="submit" value="Log in"/>
                </form> 
                <p>{this.state.user}</p>
            </div>
        )

    }
}