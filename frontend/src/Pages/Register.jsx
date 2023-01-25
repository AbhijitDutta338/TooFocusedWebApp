import React, { useState } from "react";
import Fields from "../Components/Fields";
import Navbar from '../Components/Navbar/userFormNavbar';
import { Link } from "react-router-dom";
import axios from 'axios';

function Register() {
    const [name,setName] = useState(false);
    const [password,setPassword] = useState(false);
    const [email,setEmail] = useState(false);
    const [userName,setUserName] = useState(false);
    const [confPass,setConfPass] = useState(false); 
    const [confirm, setConfirmPassword] = useState('')
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        password: ''

    });

    const handleChange = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value });

    }
    const handleConfirmChange = e => {

        setConfirmPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
   
        let isValid = true;

        if(formData.email==='')
        {
            isValid=false;
          setEmail(true);
        }
        else{
            setEmail(false);
        }
        if(formData.name==='')
        {
            isValid=false;
            setName(true);   
        }
        else{
            setName(false);   
        }
        if(formData.password==='' )
        {
            isValid=false;
            setPassword(true);
        }
        else
        {
            setPassword(false);
        }
        if(formData.userName==='' )
        {
            isValid=false;
            setUserName(true);
        }
        else{
            setUserName(false);
        }
        if(confirm==='')
        {
            isValid=false;
            setConfPass(true);
        }
        else{
            setConfPass(false);
        }
        
        if (isValid) {

            if (confirm === formData.password) {
                axios.post('http://localhost:8000/users', formData)
                    .then(res => {
                        sessionStorage.setItem('user', formData.username);                        
                    })
                    .catch(err => {
                        setError("User name already exists");
                    
                    });
            }
            else {
                setError("Passwords do not match.");
            }
        }

    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mt-3 align-items-center">
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="./images/image-hero-cropped.png" alt="" className="img-fluid h-50 mt-5" />
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <h1 className="text-center mb-3">Register Here!</h1>
                        <form>
                            <div className="row mx-5">

                                <Fields iconName="person" type="text" idName="name" onChange={handleChange} value={formData.name} placeholder="Name" />
                                {name && <p style={{color:"red"}}>Please check the Name</p>}
                                <Fields iconName="person" type="text" idName="userName" onChange={handleChange} value={formData.userName} placeholder="User Name" />
                                {userName && <p style={{color:"red"}}>Please check the User Name</p>}
                                <Fields iconName="email" type="email" idName="email" onChange={handleChange} value={formData.email} placeholder="Email" />
                                {email && <p style={{color:"red"}}>Please check the Email</p>}
                                <Fields iconName="lock" type="password" idName="password" onChange={handleChange} value={formData.password} placeholder="Password" />
                                {password && <p style={{color:"red"}}>Please check the Password</p>}
                                <Fields iconName="lock" type="password" idName="confirmPassword" onChange={handleConfirmChange} value={confirm} placeholder="Confirm Password" />
                                {confPass && <p style={{color:"red"}}>Please check the Password</p>}
                                {error && <span style={{ color: 'red' }}>{error}</span>}
                            </div>

                            <div className="text-center mt-1">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register Now</button>
                                <p className="text-muted">Already a user? <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;