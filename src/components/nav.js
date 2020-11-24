import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Weather App</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="" className="nav-link" to={"/login"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="" className="nav-link" to={"/signup"}>Sign UP</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}