import React from "react";
import * as Mui from '@mui/material';
import Multiselect from 'multiselect-react-dropdown';
import student from '../static/student.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SendIcon from '@mui/icons-material/Send';
import HomeNavbar from '../Components/Navbar/homeNavbar';

export default function Home(){
    const [qGroup, setQGroup] = React.useState('');

    const handleChange = (event) => {
        setQGroup(event.target.value);
    };

    const num=[1,2,3];
    const steps= [
        'Register in TooFocused',
        'Connect Discord',
        'Join Group'
    ];
    const randomTags=[ 'psychology', 'history', 'computer science', 'random bullshit', 'adult', 'english', 'politics'];
    return (
        <>
            <HomeNavbar/>
            <div className="mx-4 my-1 p-4 border rounded">
                <div className="d-flex">
                    <Mui.Avatar alt="User Img" src={student} />
                    <input type="text" className="form-control mx-2 w-75" placeholder="What do you want to ask or share?"/>    
                    <Mui.ButtonGroup className="mx-1" variant="text" aria-label="text button group">
                        <Mui.Button startIcon={<LiveHelpIcon/>} className="px-3">Ask</Mui.Button>
                        <Mui.Button startIcon={<BorderColorIcon/>} className="px-3">Answer</Mui.Button>
                        <Mui.Button startIcon={<PostAddIcon/>} className="px-3">Post</Mui.Button>
                    </Mui.ButtonGroup>
                </div>
                <div className="d-flex my-2">
                    <div className="ml-5 w-50">
                        <Multiselect options={randomTags} isObject={false} placeholder="Tags"/>
                    </div>
                    <Mui.FormControl className="mx-4 w-25">
                        <Mui.InputLabel id="select-label">Question group</Mui.InputLabel>
                        <Mui.Select size="small" labelId="select-label" value={qGroup} onChange={handleChange}>
                            <Mui.MenuItem value={1}>Everyone</Mui.MenuItem>
                            <Mui.MenuItem value={2}>In Specific Group_Name</Mui.MenuItem>
                        </Mui.Select>
                    </Mui.FormControl>
                    <Mui.Button variant="contained" size="small" disableElevation endIcon={<SendIcon/>} className="px-3">Send</Mui.Button>
                </div>
            </div>
            
            <Mui.Card  className="mx-4 my-1">
                <Mui.CardContent className="d-flex justify-content-between">
                    <div className="w-50">
                        <h3 className="w-75 mx-2">Join a group and learn with your peers!</h3>
                        <Mui.Stack className="d-flex mx-2" spacing={2} direction="row">
                            <Mui.Button variant="contained" color="primary" endIcon={<ArrowForwardIcon/>}>Join Group</Mui.Button>
                            <Mui.Button variant="contained" color="secondary" endIcon={<RocketLaunchIcon/>}>Explore</Mui.Button>
                        </Mui.Stack>
                    </div>
                    <div className="w-50">
                        <Mui.Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                            <Mui.Step key={label}>
                                <Mui.StepLabel>{label}</Mui.StepLabel>
                            </Mui.Step>
                            ))}
                        </Mui.Stepper>
                    </div>
                </Mui.CardContent>
            </Mui.Card>
            {num.map((number)=>{
                return (
                    <Mui.Card variant="outlined" className="mx-4 mt-2">
                        <Mui.CardContent className="">
                            <div class="d-flex">
                                <div class="mx-2">
                                    <Mui.Avatar alt="User Img" src={student} />
                                </div>
                                <div>
                                    <h6 className="m-0">Riya Sen <span className="text-muted"> TimeStamp_Here </span></h6>
                                    <p className="m-0 text-muted">I love to talk and spread kindness</p>
                                </div>
                            </div>
                            <h5>Here is a random Question without meaning?</h5>
                            <p>
                                Random answer, utterly Senseless. fsdjhfjdsflshflslfndlfdsljfkldnkfljsklfjklsfklsjfkl
                                Sample feed posts/questions
                            </p>
                        </Mui.CardContent>
                    </Mui.Card>
                );
            })}
            <footer className="page-footer font-small bg-dark mt-2">
                <div className="footer-copyright text-center py-3 text-white">© 2023 Copyright:
                <a href="" className="text-white"> TooFocused.com</a>
                </div>
            </footer>
        </>
    );
}