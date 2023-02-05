import React from "react";
import * as Mui from '@mui/material';
import Multiselect from 'multiselect-react-dropdown';
import student from '../static/student.jpg';
import HomeNavbar from '../Components/Navbar/homeNavbar';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Profile(){

    const [user, setUser] = useState({});
    const [name, setName] = useState([]);
    const randomTags=[ 'psychology', 'history', 'computer science', 'random bullshit', 'adult', 'english', 'politics'];

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/users/'+sessionStorage.getItem('userID'))
        .then(res=>{
            setUser(res.data);
            setName(res.data.name.split(" "));
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    function handleProfileSave(){

    }

    function handlePreferenceSave(){

    }

    return (
        <>
            <HomeNavbar/>
            <div className="container rounded bg-white mt-1 mb-1">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle img-fluid mt-5" height="150" src={student}/>
                            <span className="font-weight-bold h3 mt-3 mb-0">{user.name}</span>
                            <span className="text-black-50">@{user.userName}</span>
                            <a className="small" href="">Change your username</a>
                            <Mui.Button variant="text" color="error" className="mt-2" size="small">Delete Account</Mui.Button>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels mb-0">Name</label>
                                    <input type="text" className="form-control" placeholder={name[0]} value=""/>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels mb-0">Surname</label>
                                    <input type="text" className="form-control" value="" placeholder={name[1]}/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels mb-0">Email ID</label>
                                    <input type="text" className="form-control" placeholder={user.email} value=""/>
                                </div>
                                <div className="col-md-12 mt-1">
                                    <label className="labels mb-0">Mobile Number</label>
                                    <input type="text" className="form-control" placeholder={user.mobile?user.mobile:"Enter phone number"} value=""/>
                                </div>
                                <div className="col-md-12 mt-1">
                                    <label className="labels mb-0">Address Line 1</label>
                                    <input type="text" className="form-control" placeholder={user.addrLine1?user.addrLine1:"Enter address line 1"} value=""/>
                                </div>
                                <div className="col-md-12 mt-1">
                                    <label className="labels mb-0">Address Line 2</label>
                                    <input type="text" className="form-control" placeholder={user.addrLine2?user.addrLine2:"Enter address line 2"} value=""/>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label className="labels mb-0">City/District</label>
                                    <input type="text" className="form-control" placeholder={user.city?user.city:"City"} value=""/>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels mb-0">State/Region</label>
                                    <input type="text" className="form-control" value="" placeholder={user.state?user.state:"State"}/>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label className="labels mb-0">Country</label>
                                    <input type="text" className="form-control" placeholder={user.country?user.country:"Country"} value=""/>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels mb-0">PostCode</label>
                                    <input type="text" className="form-control" value="" placeholder={user.pincode?user.pincode:"ZipCode"}/>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <button className="btn btn-primary" type="button">Save Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="h4">Preferences</span>
                                <button className="btn btn-primary btn-sm" type="button">Save</button>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels mb-0">
                                        Interested Topics 
                                    </label>
                                    <p className="small text-muted mb-0">Posts & questions on these topics will be shown more on your feed</p>
                                    <Multiselect selectedValues={user.topics} options={randomTags} isObject={false} placeholder="Topics"/>
                                </div>
                                <div className="col-md-12 mt-3 d-flex justify-content-between">
                                    <h5>Mentorship</h5>
                                    <Mui.Switch checked={user.isMentor} size="small" />    
                                </div>
                                <div className="col-md-12 mt-1">
                                    <label className="labels mb-0">
                                        Mentorship Skills
                                    </label>
                                    <p className="small text-muted mb-0">Tell us what you'd like to mentor on</p>
                                    <Multiselect selectedValues={user.skills} options={randomTags} isObject={false} placeholder="Skills"/>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label className="labels mb-0">
                                        Mentoring Introduction
                                    </label>
                                    <p className="small text-muted mb-0">Tell potential mentees why they should request you as mentor</p>
                                    <textarea className="form-control" placeholder={user.introMentor} rows="3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}