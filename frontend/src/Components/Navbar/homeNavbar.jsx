import React from "react";
import * as Mui from '@mui/material';
import student from '../../static/student.jpg';
import { Link } from "react-router-dom";


function HomeNavbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light mt-1">
            <a className="navbar-brand" href="">
                <img src="./images/icons8-working-with-a-laptop-32.png" width="20" height="20" className="d-inline-block align-top mt-1"></img>
                <b>TooFocused</b>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Your Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Classroom</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/groups">Groups</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Explore</a>
                    </li>
                </ul>
                <div class="dropdown">
                    <Mui.Button variant="text" startIcon={<Mui.Avatar alt="User Img" src={student} />} className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {sessionStorage.getItem('Name')}
                    </Mui.Button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link class="dropdown-item" to="/profile" >Profile</Link>
                        <Link class="dropdown-item" onClick={()=>{
                            sessionStorage.setItem('userID', "");
                            sessionStorage.setItem('Name', "");            
                        }} to="/login" >Sign Out</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HomeNavbar;