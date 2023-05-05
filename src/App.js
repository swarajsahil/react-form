import React from "react"
import ReactDOM  from "react-dom/client";
import "./app.css";
import { Formik, useFormik } from 'formik';
import { SignUpSchemas } from "./schemas";
const initialValues={
    username:"",
    email:"",
    password:"",
    confirm_password:""
}
const App=()=>{
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:SignUpSchemas,
        onSubmit:(values)=>{
            console.log(values);
        }
    
    })
    return (
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="name">
                <label htmlFor="username">Name: </label>
                <input type="text" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur}/>
                {
                    errors.username && touched.username ? (<p>{errors.username}</p>) : null
                }
            </div>
            <div className="email">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {
                    errors.email && touched.email ? (<p>{errors.email}</p>) : null
                }
            </div>
            <div className="password">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {
                    errors.password && touched.password ? (<p>{errors.password}</p>) : null
                }
            </div>
            <div className="confirm-password">
                <label htmlFor="confirm_password">confirm Password: </label>
                <input type="password" name="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
                {
                    errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null
                }
            </div>
            <button type="submit">Registration</button></form>
        </div>
        </>
    )
}

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);