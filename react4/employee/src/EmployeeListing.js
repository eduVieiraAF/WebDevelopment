import React from "react"
import { useEffect } from "react"
import './EmployeeListing.css'

const EmployeeListing = () => {
    const baseUrl = "http://localhost:8000/employee"

    useEffect(() => {
        fetch(baseUrl)
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div className="container">
            <div className="card mt-3">
                <div className="card-title bg-dark text-warning pt-2 rounded-top">
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

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeListing