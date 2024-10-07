import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Employeedetails() {


    const [Employee,SetEmployee] = useState([])


    function getEmployee() {
        fetch("  http://localhost:4000/Employees?_sort=id&_order=desc")
        .then(response =>{
            if(response.ok) {
                return response.json()
            }
            throw new Error()
        })
        .then(data =>{
            SetEmployee(data)
        })
        .catch(error=>{
            alert("unable to get the data")
        });
        
    }

    useEffect(getEmployee,[])
    

    function deleteEmployee(id){
        fetch(" http://localhost:4000/Employees/"+id, {
            method:"DELETE"
        })
        .then(response =>{
            if(!response.ok) {
                throw new Error()
            }
            getEmployee()
        })
        .catch(error =>{
            alert("unable to delete the product")
        })
    }

    return(

        <div className="conatiner "> 
           <div className="row " style={{width:"100%",backgroundColor:"yellow",height:"40px",display:"flex",flexDirection:"row" , margin:"0" ,padding:"0",alignItems:"center"}}>
      <h1 style={{fontSize:"20px"}}>Employee Creation</h1>
    </div>
         


         <div className="row mb-3 mt-4 my-4">
            <div className="col">
              <Link className="btn btn-primary me-1" to="/admin/employees/create" role="button">Create Employees</Link>
             <button type="button" className="btn btn-outline-primary" onClick={getEmployee}>Refresh</button>
            </div>

            <div className="col">

              </div>
         </div>
           
           <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Designation</th>
                    <th>Course</th>
                    <th>Gender</th>
                    <th>Image-File</th>
                </tr>
            </thead>

            <tbody>

                {
                    Employee.map((user, index)=>{
                        return(
                            <tr key={index}>

                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.designation}</td>
                                <td>{user.course}</td>
                                <td>{user.gender}</td>
                                <td><img src={"http://localhost:4000/Employees/images/" +user.imagename} width="100" alt="..."/></td>
                              
                                <td style={{width:"10px",whiteSpace:"nowrap"}}>
                                    <Link className="btn btn-primary btn-sm me-1" to="/admin/employees/edit">Edit</Link>
                                    <button type="button"className="btn btn-danger btn-sm"  onClick={()=> deleteEmployee(user.id)}>Delete</button>
                                               </td>
                                

                            </tr>
                        )
                    })
                }

            </tbody>
           </table>


        </div>
    )
}