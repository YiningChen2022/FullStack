 
import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'

//rfce ES6 error function
const ListEmployeeComponents = () => {
    //the useState is a Hook (function) that allows you to have state variabes in functional components
    const [employees, setemployees] = useState([])
    //the useEffect Hook allows us to perform side effects (an action) int the function components
    useEffect(()=>{
       EmployeeService.getAllEmployees().then((response)=>{
           setemployees(response.data)
           console.log(response.data)
       }).catch(error => {
           console.log(error);
       })
    },[])

    return (
        <div className = "container">
            <h2 className = "text-center ">List Employees</h2>
            <table className = "table table-bordered table-striped">
                <thead>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => 
                            <tr key = {employee.id}>
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.emailId} </td>
                            </tr>
                        )
                    }


                </tbody>

            </table>

      
        </div>
  )
}

export default ListEmployeeComponents
