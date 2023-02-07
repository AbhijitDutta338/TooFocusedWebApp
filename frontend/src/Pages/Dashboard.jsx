import React from "react";
import * as Mui from '@mui/material';
import Graph from '../Components/Graph';
import Navbar from '../Components/Navbar/homeNavbar';
import Ach from '../Components/achievements';
import Orders from "../Components/Tasks";
import Btn from "../Components/AddBtn";
import SendIcon from '@mui/icons-material/Send';
export default function dashboard() {

    return (
        <>
            <Navbar />
            <Mui.Grid container spacing={0} direction="row" >
                <Mui.Card raised className="m-5" >
                    <Mui.CardContent className="text-center" autowidth autoheight>
                        <Graph />
                    </Mui.CardContent>
                </Mui.Card>
                <Mui.Card raised className="m-5" style={{ width: '300px', height: '200px' }}>
                    <Mui.CardContent className="text-center" >
                        <Ach />
                    </Mui.CardContent>
                </Mui.Card>
            </Mui.Grid>
            <Mui.Grid container spacing={0} direction="column"  >
                <Mui.Card raised className="m-5"  autowidth>
                    <Mui.CardContent className="text-center" >
                        <Orders />
                        {/* <div style={{marginTop: "10px"}}>
                        <Mui.Button variant="contained" size="small" disableElevation endIcon={<SendIcon/>} className="px-3">Add Task</Mui.Button>
                        </div> */}
                        <Btn/>
                    </Mui.CardContent>
                </Mui.Card>
            </Mui.Grid>
            <footer className="page-footer font-small bg-dark mt-2">
                <div className="footer-copyright text-center py-3 text-white">© 2023 Copyright:
                <a href="" className="text-white"> TooFocused.com</a>
                </div>
            </footer>
        </>

    );
}