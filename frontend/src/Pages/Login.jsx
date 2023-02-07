import React, { useState } from "react";
import Fields from "../Components/Fields";
import Navbar from '../Components/Navbar/userFormNavbar';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/users/login?userName=${username}&password=${password}`)
            .then(res => {
                sessionStorage.setItem('userID', res.data.user._id);
                sessionStorage.setItem('Name', res.data.user.name);
                console.log(res.data.user);
                navigate('/home');
                setError("");
            })
            .catch(err => {
                setError("Please Enter Valid Username and Password");
                console.log("Failed")
                console.log(err)
            });
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
                            <h1 className="text-center mb-3">Sign In!</h1>
                            <form>
                                <div className="row mx-5">
                                    <Fields iconName="person" type="text" idName="userName" value={username} onChange={e => setUsername(e.target.value)} placeholder="User Name" />
                                    <Fields iconName="lock" type="password" idName="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                                    {error && <span style={{ color: 'red' }}>{error}</span>}
                                </div>
                                <div className="text-center mt-1">

                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>LogIn</button>

                                    <p className="text-muted mb-1 mt-3">Not a Member yet? <Link to="/register">Register Now!</Link></p>
                                    <Link className="my-auto" to="/forget-password">Forgotten Password?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Login;