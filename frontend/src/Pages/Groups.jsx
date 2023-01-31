import React from "react";
import * as Mui from '@mui/material';
import HomeNavbar from '../Components/Navbar/homeNavbar';
import Divider from '@mui/material/Divider';

export default function Groups(){
    return(
        <>
        <HomeNavbar/>
        <Mui.Card  className="mx-4 my-1">
            <Mui.CardContent className="d-flex justify-content-between">
                <div className="w-40">
                    <h3 className="w-100 mx-2">Explore Groups</h3>
                </div>
                <div className="w-45">
                    <Mui.Stack className="d-flex mx-2" spacing={2} direction="row">
                        <Mui.Button variant="contained" color="primary" align="right">Create your own Group</Mui.Button>
                        <Mui.Button variant="contained" color="secondary" align="right">Join a random group</Mui.Button>
                    </Mui.Stack>
                    </div>
            </Mui.CardContent>
        </Mui.Card>

        <div style={{display:"flex",flexDirection:"row"}}>

            
                <Mui.Card>
                <Mui.CardContent className="d-flex justify-content-between">

                </Mui.CardContent>
                </Mui.Card>
            
            
                <Mui.Card>
                <Mui.CardContent className="d-flex justify-content-between">
                    
                </Mui.CardContent>
                </Mui.Card>
            

        </div>


        </>
    );
}