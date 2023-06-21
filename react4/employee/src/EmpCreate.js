import React from "react";
import { Link } from "react-router-dom";
import './EmpCreate.css'


export const EmpCreate = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12 col-md-6">
                    <div className="container">
                        <div className="card">
                            <div className="card-title mt-2">
                                <h2>
                                    Add new employee
                                    <Link to="/" className="btn btn-dark btn-home"><i className="fa fa-lg fa-home text-warning"></i></Link>
                                </h2>
                                <hr className="text-secondary"></hr>
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}