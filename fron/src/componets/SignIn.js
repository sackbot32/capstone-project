import React,{Component} from "react";
import {createrUser} from "./Api";

export class SignIn extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:"",
            password:""
        }
        this.signIn = this.signIn.bind(this)
    }

    signIn () {
        
        createrUser(this.state.name, this.state.password)
    }


    render(){
        return (
            <div>
                <form method="get" onSubmit={this.signIn}>
                    <label for="user">User:</label><br/>
                    <input type="text" id="user" name="user" onChange={(e) => {this.setState({name:e.target.value}); console.log(this.state.name)}}/><br/>
                    <label for="password">Password:</label><br/>
                    <input type="password" id="password" name="password" onChange={(p) => {this.setState({password:p.target.value}); console.log(this.state.password) }}/><br/>
                    <input type="submit" value="Sing up" />
                </form> 
            </div>
        )

    }
}