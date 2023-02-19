import React from "react";
import { useNavigate } from "react-router-dom";
import * as Mui from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

export default function NotFoundError(){
    const navigate = useNavigate();
    return (
        <Mui.Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Mui.Grid item xs={3}>
                <Mui.Card raised className="m-5">
                    <Mui.CardContent className="text-center">
                        <div className="p-3 shadow">
                            <h1 className="display-1 font-weight-bold ">404</h1>
                            <h4 className="text-muted">Page Not Found</h4>
                            {(sessionStorage.getItem('userID') && sessionStorage.getItem('userID').length>0) ? 
                                <>
                                    <p className="">The page got swallowed by a black hole...</p>
                                    <Mui.Button variant="contained" color="secondary" startIcon={<HomeIcon/>} onClick={()=>{navigate("/home")}}>Back to Home</Mui.Button>
                                </>:
                                <>
                                <p className="">The page does not exists or you're not authorized to access the page.</p>
                                <Mui.Button variant="contained" color="secondary" startIcon={<LoginIcon/>} onClick={()=>{navigate("/login")}}>Back to Login</Mui.Button>
                                </>
                            }
                        </div>
                    </Mui.CardContent>
                </Mui.Card>        
            </Mui.Grid>      
        </Mui.Grid>
    );
}
