import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";

const CreateEmployee = () => {
    const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    course: "",
    gender: "",
    imageFile: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setEmployeeData({
      ...employeeData,
      imageFile: e.target.files[0], 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", employeeData.name);
    formData.append("email", employeeData.email);
    formData.append("mobile", employeeData.mobile);
    formData.append("designation", employeeData.designation);
    formData.append("course", employeeData.course);
    formData.append("gender", employeeData.gender);
    formData.append("imageFile", employeeData.imageFile); 

    try {
      const response = await fetch("http://localhost:4000/Employees", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (response.ok) {
        alert("Employee created successfully!");
        console.log("Created Employee:", result);
       
        setEmployeeData({
          name: "",
          email: "",
          mobile: "",
          designation: "",
          course: "",
          gender: "",
          imageFile: null,
        });

        navigate("/admin/employees")
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (

  

      <div>

    <div className="row " style={{width:"100%",backgroundColor:"yellow",height:"40px",display:"flex",flexDirection:"row" , margin:"0" ,padding:"0",alignItems:"center"}}>
      <h1 style={{fontSize:"20px"}}>employee creation</h1>
    </div>
      

        <div className="col-md-8 mx-auto rounded border p-4">
          <h2 className="text-center mb-5">Create Employee</h2>

       

    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label">Name:</label>
        <div className="col-sm-8">
        <input className="form-control"
          type="text"
          name="name"
          value={employeeData.name}
          onChange={handleChange}
          required
        />
        <span className="text-danger"></span>
      </div></div>


      <div className="row mb-3">
        <label  className="col-sm-4 col-form-label" >Email:</label>
        <div className="col-sm-8" >
        <input className="form-control"
          type="email"
          name="email"
          value={employeeData.email}
          onChange={handleChange}
          required
        />
         <span className="text-danger"></span>
         </div>
      </div>


      <div className="row mb-3">
        <label  className="col-sm-4 col-form-label" >Mobile:</label>
        <div  className="col-sm-8"> 
        <input className="form-control"
          type="text"
          name="mobile"
          value={employeeData.mobile}
          onChange={handleChange}
          required
        />
         <span className="text-danger"></span>
      </div>
      </div>


      <div className="row mb-3" >
        <label className="col-sm-4 col-form-label">Designation:</label>

        <div  className="col-sm-8" >
        <select
          name="designation"
          value={employeeData.designation}
          onChange={handleChange}
          required
        >
     
        <option value="Manager">Manager</option>
                  <option value="HR">HR</option>
                  <option value="Sales">Sales</option>
       </select>
        <span className="text-danger"></span>
      </div>
      </div>


      <div className="row mb-3" >
        <label className="col-sm-4 col-form-label">Course:</label>
        <div className="col-sm-8">
        <input 
          type="checkbox"
          id="BCA"
          name="course"
          value={employeeData.course}
          onChange={handleChange}
        />BCA (Bachelor of Computer Application)&nbsp;
        <input
          type="checkbox"
          id="MCA"
          name="course"
          value={employeeData.course}
          onChange={handleChange}
        />MCA(Master of Computer Applications) &nbsp;
        <input 
          type="checkbox"
          id="BSC"
          name="course"
          value={employeeData.course}
          onChange={handleChange}
        />BSC(Bachelor of Science)
        <span className="text-danger"></span>
      </div>
      </div>


      <div className="row mb-3" >
        <label className="col-sm-4 col-form-label" >Gender:</label>
        <div className="col-sm-8">
        <input 
         type="radio"
        
          name="gender"
          value={employeeData.gender}
          onChange={handleChange}
          required
              /> Male
              &nbsp;
        <input 
         type="radio"
        
          name="gender"
          value={employeeData.gender}
          onChange={handleChange}
          required
              />female


          <span className="text-danger"></span>
          </div>
      </div>


      <div className="row mb-3" >
        <label className="col-sm-4 col-form-label">Image File:</label>
        <div className="col-sm-8">
        <input  className="form-control"
          type="file"
          name="imageFile"
          onChange={handleFileChange}
          required
        />
        <span className="text-danger"></span>
      </div>
      </div>
      <div className="row">

      <div className="offset-sm-4 col-sm-4 d-grid">
      <button type="submit" className="btn btn-primary">Submit</button>
         </div>

         <div className=" col-sm-4 d-grid">
      <Link className="btn btn-secondary" to="/admin/employees" role="button">Cancel</Link>
         </div>
      </div>
    </form>
    </div>
    </div>

  );
};

export default CreateEmployee;


