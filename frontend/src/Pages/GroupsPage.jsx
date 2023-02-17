import React from "react";
import * as Mui from '@mui/material';
import HomeNavbar from '../Components/Navbar/homeNavbar';
import HomeIcon from '@mui/icons-material/Home';
import {red,purple,amber,teal,cyan,indigo,lime,deepOrange,pink,lightGreen} from "@mui/material/colors";
import Divider from '@mui/material/Divider';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import MessageIcon from '@mui/icons-material/Message';
import GitHubIcon from '@mui/icons-material/GitHub';
import "rsuite/dist/rsuite.min.css";
import { Calendar, Badge, Whisper} from 'rsuite';
import ScheduleIcon from '@mui/icons-material/Schedule';
import zIndex from "@mui/material/styles/zIndex";




const cardStyle = {
    height: '40vw',
    padding: 2
}

const Names=[{name:'Akhilesh Kumawat', username : 'akhilesh@123'},
{name:'Akash',username:'akash@123'},
{name:'Anshul Singh',username:'anshul@123'},
{name:'Krishna',username:'krishna@123'},
{name:'John Doe',username:'john@123'},
{name:'Riya Sen',username:'riya@123'},
{name:'Akhilesh Kumawat', username : 'akhilesh@123'},
{name:'Akash',username:'akash@123'},
{name:'Anshul Singh',username:'anshul@123'},
{name:'Krishna',username:'krishna@123'},
{name:'John Doe',username:'john@123'},
{name:'Riya Sen',username:'riya@123'}];

const tagColors=[red[200],purple[300],amber[500],deepOrange[500],lime[400],teal[500],deepOrange[300],pink[300],lightGreen[600],purple[500]];

//function for displaying badge under dates

function getSchedule(date) {
    const day = date.getDate();
  
    switch (day) {
      case 3:
        return [
          { time: '12:00 pm'}
        ];
      case 6:
        return [
          { time: '09:30 pm'}
        ];

    case 14:
        return[{ time: '12:30 pm'}];
    case 22:
        return[{ time: '02:00 pm'}];
    case 28:
        return[{ time: '05:00 pm'}];
      default:
        return [];
    }
  }

export default function Groups(){

    function renderCell(date) {
        const list = getSchedule(date);

        const Overlay = React.forwardRef(({ style, onClose, ...rest }, ref) => {
            const styles = {
              ...style,
              color: '#000',
              background: '#fff',
              width: 150,
              padding: 2,
              borderRadius: 4,
              position: 'absolute',
              border: '1px solid #ddd',
              boxShadow: '0 3px 6px -2px rgba(0, 0, 0, 0.6)',
              zIndex:100
            };
            const list = getSchedule(date);
            const scheduleItem=(<ul>
                {list.map((item, index) => (
        <p key={index}>
          {item.time}
        </p>
      ))}
    </ul>);
          
            return (
              <div {...rest} style={styles} ref={ref}>
               <div className="ml-0 mt-1 ">{scheduleItem}</div>
              </div>
            );
          });
    
        if (list.length) {
          //return <Badge className="calendar-todo-item-badge" style={{background:'#9c27b0'}} />;
 
         return <Whisper className="calendar-todo-item-badge"
          trigger="hover"
          speaker={(props, ref) => {
            const { className, left, top, onClose } = props;
            return <Overlay style={{ left,top }} onClose={onClose} className={className} ref={ref} />;
          }}
        >
          <Badge style={{background:'#9c27b0'}}/>
        </Whisper>
          
        }
    
        return null;
      }

 

    return(
        <>
        <HomeNavbar/>
        <Mui.Box sx={{ flexGrow: 1 }}>

        <Mui.Grid container spacing={0}>
            <Mui.Grid item xs={8}>
            <Mui.Card className="ml-4 mr-3 mt-2 mb-4" style={{
                            overflowY: 'auto', height: '40vw',
                            padding: 2
                        }}
                        sx={{
                            "&::-webkit-scrollbar": {
                              width: 5
                            },
                            "&::-webkit-scrollbar-track": {
                              backgroundColor: "#F0F8FF"
                            },
                            "&::-webkit-scrollbar-thumb": {
                              backgroundColor: "#DCDCDC",
                              borderRadius: 2
                            }
              }}>

                            <Mui.CardHeader action={<Mui.Button style={{ float: "right" }} variant="contained" size="small"
                                endIcon={<HomeIcon />} color="secondary">Back home</Mui.Button>} title="PROGRAMMER'S CAFE" />
                            <Divider sx={{ width: 100, borderBottomWidth: 5, background: purple[300] }} className="ml-3" />
                            <Mui.Typography variant="subtitle2" className="ml-3 mt-3 mb-3" style={{ fontWeight: 'light' }}>
                                The space to share ideas via coding
                            </Mui.Typography>

                            <Mui.Grid
                                container
                                spacing={2}
                                direction="row"
                                justify="center"
                                alignItems="center"
                                className="mx-1 mb-3"

                            >
                                {Names.map((elem) => {
                                    let randindex=Math.floor(Math.random() * 10);
                                    return (
                                        <Mui.Grid item xs={12} sm={12} md={5.7} lg={3.8} key={Names.indexOf(elem)} >
                                            <Mui.Card style={{ height: '13vw' }} variant='outlined'>
                                            <div style={{ display:'flex', justifyContent:'center', marginTop:'auto'}}>
                                                    <Mui.Avatar sx={{ background: tagColors[randindex] ,width: 48, height: 48 }} className="mt-3 mb-2">
                                                        <Person2SharpIcon />
                                                    </Mui.Avatar>
                                                    
                                            </div>
                                            <div style={{ display:'flex', justifyContent:'center', marginTop:'auto'}}>
                                                <h6>{elem.name}</h6>
                                            </div>

                                            <div style={{ display:'flex', justifyContent:'center', marginTop:'auto'}}>
                                                <Mui.Typography variant="caption">{elem.username}</Mui.Typography>
                                            </div>
                                            <Mui.CardActions disableSpacing>
                                                <Mui.IconButton>
                                                    <MessageIcon fontSize="small" sx={{color:indigo[100]}}/>
                                                </Mui.IconButton>
                                                <Mui.IconButton>
                                                    <GitHubIcon fontSize="small" sx={{color:indigo[100]}}/>
                                                </Mui.IconButton>
                                            </Mui.CardActions>

                                            </Mui.Card>
                                        </Mui.Grid>
                                    );
                                })}

                            </Mui.Grid>

                        </Mui.Card>
                    </Mui.Grid>

            <Mui.Grid item xs={4}>
            <Mui.Card style={cardStyle} className="ml-0 mr-4 my-2 mb-4">
            <div style={{ display:'flex', justifyContent:'center', marginTop:'auto'}} className="mt-5 mb-3">
            <ScheduleIcon color="secondary" className="mr-2"/>
            <Mui.Typography variant="body2" color="secondary" className="mt-1">CATCHUP SCHEDULE</Mui.Typography>
            </div>
            <div style={{ display:'flex', justifyContent:'center', marginTop:'auto'}}>
            
            <Mui.Box sx={{width:"75%"}}>
            
            <Mui.Card style={{height:'26vw'}} variant='outlined' >
            <Calendar compact renderCell={renderCell} className="mb-1"/>
            </Mui.Card>
            <Mui.Button fullWidth variant="contained" size="small" className="mt-3">Join the group</Mui.Button>
            </Mui.Box>
            </div>
            </Mui.Card>
            </Mui.Grid>

        </Mui.Grid>

        </Mui.Box>
        </>
    );
}