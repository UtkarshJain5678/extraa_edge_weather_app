import React, { Component } from "react";
import {connect} from 'react-redux';

class Login extends Component {
    constructor(props)
    {
        super(props);
    }

    handleSubmit=e=>{
        e.preventDefault();
        const data={
            username:this.username,
            password:this.password
        }

        console.log(data);

        if(this.props.username===data.username && this.props.password===data.password)
        {
            console.log("Successfully Login");
        }
        else{
            console.log(this.props.username, this.props.password, data.username, data.password);
        }   
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="User Name" onChange={e => this.username = e.target.value} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value} />
                </div>
                <button className="btn btn-primary btn-block">Login</button>
            </form>
        )
    }
}

const mapStateToProps=(state)=>({
    username: state.username,
    password: state.password
})

const mapDispatchToProps=(dispatch)=>{
}

export default connect(mapStateToProps)(Login);