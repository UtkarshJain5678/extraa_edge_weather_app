import React, { Component } from "react";
import {connect} from 'react-redux';


class SignUp extends Component {
    constructor(props)
    {
        super(props);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        const data={
            username:this.username,
            password:this.password,
            confirmPassword:this.confirmPassword
        }
        
        if(data.password===data.confirmPassword)
        {
            this.props.signUp(data);
            console.log(data);
        }else{
            alert("Password and Confirm Password doesn't match");
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="UserName" onChange={e => this.username = e.target.value} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value} />
                </div>
                <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm Password" onChange={e => this.confirmPassword = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block">SignUp</button>
            </form>
        )
    }
}


const mapStateToProps=(state)=>({

})

const mapDispatchToProps=(dispatch)=>({
    signUp:(userCredential)=>dispatch({type: "SIGNUP", payload:userCredential})
})

export default connect(null,mapDispatchToProps)(SignUp);