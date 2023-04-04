import React from "react";
import * as Mui from '@mui/material';
import HomeNavbar from '../Components/Navbar/homeNavbar';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { height } from "@mui/system";

import coding from '../static/coding.jpg';
import gk from '../static/gk.jpg';
import history from '../static/history.jpg';
import politics from '../static/politics.jpg';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { red,purple,amber,teal,lime,deepOrange,pink,lightGreen } from '@mui/material/colors';
import TagIcon from '@mui/icons-material/Tag';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  // constant for side bar
  const Groups=[{groupName:"Programmer's cafe",groupAvatar:coding},{groupName:"History Buffs",groupAvatar:history},{groupName:"Indian Politics",groupAvatar:politics},{groupName:"General Knowledge",groupAvatar:gk}]
  const Tags = ['psychology','history','computer science','english','politics','psychology','history','computer science','english','politics','psychology','history','computer science','english','politics','psychology','history','computer science','english','politics'];
  const tagColors=[red[200],purple[300],amber[500],deepOrange[500],lime[400],teal[500],deepOrange[300],pink[300],lightGreen[600],purple[500]];

  //constant for posts
  const postData = [
    { postTitle: "Lorem Ipsum", postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     postAuthor:13, postDate: "23/03/23"},
    { groupName: "HISTORY BUFFS", description: "qwertyoapjdkfbiibwebidsbupvi biivei", memberCount:5, memberNames:['P','B','C'], gTag:"History"},
    { groupName: "INDIAN POLITICS", description: "Keyboard warriors nakjafbkbfkh bfih",memberCount:10, memberNames:['S','B','C'],gTag:"Politics" },
    { groupName: "GENERAL KNOWLEDGE", description: "advjavvjejyefvuevuyvceuvuywduvucuhbdeuebqwiyfyiyfy" ,memberCount:7,memberNames:['V','B','C'], gTag:"History"},
    { groupName: "PROGRAMMER'S CAFE", description: "The space to share ideas via coding", memberCount:13, 
    memberNames:['A','B','C'], gTag:"Computer Science"},
    { groupName: "HISTORY BUFFS", description: "qwertyoapjdkfbiibwebidsbupvi biivei", memberCount:5, memberNames:['P','B','C'], gTag:"History"},
    { groupName: "INDIAN POLITICS", description: "Keyboard warriors nakjafbkbfkh bfih",memberCount:10, memberNames:['S','B','C'],gTag:"Politics" },
    { groupName: "GENERAL KNOWLEDGE", description: "advjavvjejyefvuevuyvceuvuywduvucuhbdeuebqwiyfyiyfy" ,memberCount:7,memberNames:['V','B','C'], gTag:"History"},
    { groupName: "PROGRAMMER'S CAFE", description: "The space to share ideas via coding", memberCount:13, 
    memberNames:['A','B','C'], gTag:"Computer Science"},
    { groupName: "HISTORY BUFFS", description: "qwertyoapjdkfbiibwebidsbupvi biivei", memberCount:5, memberNames:['P','B','C'], gTag:"History"},
    { groupName: "INDIAN POLITICS", description: "Keyboard warriors nakjafbkbfkh bfih",memberCount:10, memberNames:['S','B','C'],gTag:"Politics" },
    { groupName: "GENERAL KNOWLEDGE", description: "advjavvjejyefvuevuyvceuvuywduvucuhbdeuebqwiyfyiyfy" ,memberCount:7,memberNames:['V','B','C'], gTag:"History"},
    { groupName: "PROGRAMMER'S CAFE", description: "The space to share ideas via coding", memberCount:13, 
    memberNames:['A','B','C'], gTag:"Computer Science"},
    { groupName: "HISTORY BUFFS", description: "qwertyoapjdkfbiibwebidsbupvi biivei", memberCount:5, memberNames:['P','B','C'], gTag:"History"},
    { groupName: "INDIAN POLITICS", description: "Keyboard warriors nakjafbkbfkh bfih",memberCount:10, memberNames:['S','B','C'],gTag:"Politics" },
    { groupName: "GENERAL KNOWLEDGE", description: "advjavvjejyefvuevuyvceuvuywduvucuhbdeuebqwiyfyiyfy" ,memberCount:7,memberNames:['V','B','C'], gTag:"History"}
]

export default function Explore(){
    return(
        <>
        <HomeNavbar/>
        <Mui.Box sx={{ flexGrow: 1 }}>
        <Mui.Grid container spacing={0}>
            <Mui.Grid item xs={8}>
            <Item className="ml-4 mr-3 mt-2 mb-4" variant="outlined"
            style={{
                overflowY: 'auto', height: '42vw',
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
                }}}>
                    
                Search

                            <Mui.Grid
                                container
                                spacing={2}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                className="ml-1 my-1 mb-4"
                            >
                                {data.map((elem, index) => {
                                    let randindex = Math.floor(Math.random() * 10);
                                    return (
                                        <Mui.Grid item xs={12} sm={12} md={5.7} lg={5.7} key={data.indexOf(elem)} >
                                            <Mui.Card style={{ height: '13vw' }} variant="outlined">
                                                <Mui.CardHeader
                                                    action={

                                                        <Mui.Chip label={elem.gTag} size="small" sx={{ background: tagColors[randindex] }} variant="filled" />

                                                    }
                                                    subheader={elem.groupName}
                                                />
                                                <Mui.Divider />
                                                <Mui.CardContent className="d-flex justify-content-between">
                                                    <Mui.Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'light' }}>
                                                        {elem.description}
                                                    </Mui.Typography>
                                                </Mui.CardContent>
                                                <Mui.CardActions>
                                                    <Mui.AvatarGroup>
                                                        <Mui.Avatar sx={{ bgcolor: avatarColors[0], width: 30, height: 30, fontSize: 15 }} aria-label="recipe">
                                                            {elem.memberNames[0]}
                                                        </Mui.Avatar>
                                                        <Mui.Avatar sx={{ bgcolor: avatarColors[1], width: 30, height: 30, fontSize: 15 }} aria-label="recipe">
                                                            {elem.memberNames[1]}
                                                        </Mui.Avatar>
                                                        <Mui.Avatar sx={{ bgcolor: avatarColors[2], width: 30, height: 30, fontSize: 10 }} aria-label="recipe">
                                                            + {elem.memberCount - 2}
                                                        </Mui.Avatar>
                                                    </Mui.AvatarGroup>

                                                    <Mui.IconButton sx={{ width: 17, height: 17 }} style={{ marginLeft: 'auto' }}>
                                                        <Mui.ChevronRightIcon />
                                                    </Mui.IconButton>
                                                </Mui.CardActions>
                                            </Mui.Card>
                                        </Mui.Grid>
                                    );
                                })}

                            </Mui.Grid>
                            
  
            </Item>
            </Mui.Grid>
            <Mui.Grid item xs={4}>
            <Item className="ml-0 mr-4 my-2 mb-4"  variant="outlined" style={{
                            overflowY: 'auto', height: '42vw',
                            
                        }}>
            <Mui.Grid container columnSpacing={1} direction="column" spacing={2}>
            
             <Mui.Grid item ><Paper variant="outlined" style={{height:'19vw'}} >
                <Mui.Typography variant="body2" className="mt-2 mb-2">CHECKOUT THESE GROUPS</Mui.Typography>
                <Mui.Divider/>
                {Groups.map((elem,ind)=>{
                    return(<Mui.List>
                        <Mui.ListItem disablePadding dense secondaryAction={<Mui.IconButton size="small"><ArrowRightIcon color="primary"/></Mui.IconButton>}>
                            
                                <Mui.ListItemAvatar>
                                    <Mui.Avatar src={Groups[ind].groupAvatar}  sx={{width:24,height:24}} className="ml-3"/>
                                </Mui.ListItemAvatar>
                                <Mui.ListItemText primary={elem.groupName}/>
                            
                        </Mui.ListItem>
                        <Mui.Divider/>
                    </Mui.List>);
                })}
                
                <Mui.Typography variant="caption" color="primary" >show more</Mui.Typography>
             </Paper></Mui.Grid>
             <Mui.Grid item><Paper variant="outlined" style={{height:'20vw',overflow:"hidden"}}>
             <Mui.Typography variant="body2" className="mt-2 mb-2">TOP TAGS TO CHECK</Mui.Typography>
                <Mui.Divider className="mb-2"/>
                <div style={{overflow:"hidden"}} className="mb-1">
                {Tags.map((chip)=>{
                    let randindex=Math.floor(Math.random() * 10);
                    return(<Mui.Chip  label={chip} 
                        avatar={<Mui.Avatar sx={{ bgcolor: tagColors[randindex] }}><Mui.Typography color="#ffffff">#</Mui.Typography></Mui.Avatar>}
                        size="small" className="mx-1 my-1" sx={{ borderColor: tagColors[randindex]}} variant="outlined">
                        
                    </Mui.Chip>);

                })}
                </div>
                </Paper></Mui.Grid>
             
             
            </Mui.Grid>
                        
            </Item>
            </Mui.Grid>
        </Mui.Grid>
        </Mui.Box>
        </>
    );
}