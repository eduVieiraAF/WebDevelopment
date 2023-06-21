/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { useEffect } from "react"
import './EmployeeListing.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { Link } from "react-router-dom"

const EmployeeListing = () => {
    const baseUrl = "http://localhost:8000/employee"
    const [empData, empDataChange] = useState(null)

    useEffect(() => {
        fetch(baseUrl)
            .then(resp => resp.json())
            .then(data => empDataChange(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div className="container">
            <div className="card mt-3">
                <div className="card-title bg-dark text-warning pt-2 rounded-top mb-0">
                    <h2>List of Employees</h2>
                </div>
                <div className="card-body">
                    <table className='table table-bordered'>
                        <thead className="table-warning">
                            <tr>
                                <td>ID</td>
                                <td>NAME</td>
                                <td>EMAIL</td>
                                <td>PHONE</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empData && empData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button className="btn btn-dark text-warning btn-sm" title="Edit"><i className="fa fa-pencil"></i></button>
                                            <button className="btn btn-danger btn-sm" title="Delete"><i className="fa fa-times"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="btn-group">
                        <Link to="employee/create" className="btn btn-dark text-warning ">Add new <i className="fa fa-plus"></i></Link>
                        <button className="btn btn-dark text-warning ms-1">Print <i className="fa fa-print"></i></button>
                        <button className="btn btn-dark text-warning ms-1"><i className="fa fa-info"></i></button>
                    </div>                                    
                </div>
            </div>
        </div>
    )
}

export default EmployeeListing