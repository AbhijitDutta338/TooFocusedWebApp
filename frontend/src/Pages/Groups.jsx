import React from "react";
import * as Mui from '@mui/material';
import HomeNavbar from '../Components/Navbar/homeNavbar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { ThemeContext } from "@emotion/react";
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { red,purple,amber,teal,cyan,indigo,lime,deepOrange,pink,lightGreen } from '@mui/material/colors';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
const useStyles = styled((theme) => ({  
    root: {
      "&::-webkit-scrollbar": {
        width: 1,
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
        outline: `1px solid slategrey`,
      },
    },
  }));


const cardStyle = {
    height: '36vw',
    padding: 2
}

const Tags = ['psychology','history','computer science','english','politics'];
const Background=["educator","student"]
const tagColors=[red[200],purple[300],amber[500],deepOrange[500],lime[400],teal[500],deepOrange[300],pink[300],lightGreen[600],purple[500]];
const avatarColors=[teal[700],cyan[500],indigo[300]]

const data = [
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
    { groupName: "GENERAL KNOWLEDGE", description: "advjavvjejyefvuevuyvceuvuywduvucuhbdeuebqwiyfyiyfy" ,memberCount:7,memberNames:['V','B','C'], gTag:"History"},
    { groupName: "PROGRAMMER'S CAFE", description: "The space to share ideas via coding", memberCount:13, 
    memberNames:['A','B','C'], gTag:"Computer Science"},
    { groupName: "HISTORY BUFFS", description: "qwertyoapjdkfbiibwebidsbupvi biivei", memberCount:5, memberNames:['P','B','C'], gTag:"History"},
    { groupName: "INDIAN POLITICS", description: "Keyboard warriors nakjafbkbfkh bfih",memberCount:10, memberNames:['S','B','C'],gTag:"Politics" },
    { groupName: "GENERAL KNOWLEDGE", description: "advjavvjejyefvuevuyvceuvuywduvucuhbdeuebqwiyfyiyfy" ,memberCount:7,memberNames:['V','B','C'], gTag:"History"}
]

export default function Groups(){
    const handleMoreClick = () => {
        
      };

      const classes = useStyles();

    return(
        
        <>
        <HomeNavbar/>
        <Mui.Card className="mx-4 my-1">
            <Mui.CardContent className="d-flex justify-content-between">
                <div className="w-40">
                    <h3 className="w-100 mx-2">Explore Groups</h3>
                    <Divider sx={{width:100, borderBottomWidth: 5 , background:purple[300]}} className="ml-2"/>
                </div>
                <div className="w-45">
                    <Mui.Stack className="d-flex mx-2" spacing={2} direction="row">
                        <Mui.Button variant="contained" color="primary" align="right">Create your own Group</Mui.Button>
                        <Mui.Button variant="contained" color="secondary" align="right">Join a random group</Mui.Button>
                    </Mui.Stack>
                    </div>
            </Mui.CardContent>
        </Mui.Card>

        
                <Box sx={{ flexGrow: 1 }} className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <Card className="ml-4 mr-3 mt-2 mb-4" style={cardStyle}>
                            <Mui.CardContent className="d-flex justify-content-between">
                            <div>
                                <h6 className="w-100 mx-2 my-2">FILTERS</h6>
                        
                            </div>
                            <div>
                            <Button variant="text">Clear All</Button>
                            </div>
                            
                            </Mui.CardContent>
                            <Divider/>
                            <Mui.CardContent >
                                <div>
                                    <h6>Team Name</h6>
                                    <Mui.TextField id="teamName" placeholder="team name / team id" size="small" variant="outlined" fullWidth />
                                </div>

                                <div>
                                    <h6 className="mt-4">Members</h6>
                                    <Mui.ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth>
                                        <Button>0-5</Button>
                                        <Button>5-10</Button>
                                        <Button>10-15</Button>
                                        <Button>15+</Button>
                                    </Mui.ButtonGroup>
                                </div>

                                <div>
                                    <h6 className="mt-4">Tags</h6>
                                    <Mui.TextField
                                        id="tagsSelect"
                                        select
                                        placeholder="Select Tags"
                                        fullWidth
                                        size="small"
                                    >
                                        {Tags.map((option) => (
                                            <Mui.MenuItem key={option} value={option}>
                                                {option}
                                            </Mui.MenuItem>
                                        ))}
                                    </Mui.TextField>
                                </div>

                                <div>
                                    <h6 className="mt-4">Background</h6>
                                    <Mui.TextField
                                        id="tagsSelect"
                                        select
                                        placeholder="Select Tags"
                                        fullWidth
                                        size="small"
                                    >
                                        {Background.map((option) => (
                                            <Mui.MenuItem key={option} value={option}>
                                                {option}
                                            </Mui.MenuItem>
                                        ))}
                                    </Mui.TextField>
                                </div>
                                
                            </Mui.CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={8}>
                        <Card className="ml-0 mr-4 my-2 mb-4" style={{
                            overflowY: 'auto', height: '36vw',
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
                                <h6 className="ml-4 mt-4">Find the perfect group for you!</h6>
                            <div >
                                <Grid
                                    container
                                    spacing={2}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className="ml-1 my-1 mb-4"
                                >
                                    {data.map((elem,index)=> {
                                        let randindex=Math.floor(Math.random() * 10);
                                        return(
                                        <Grid item xs={12} sm={12} md={5.7} lg={5.7} key={data.indexOf(elem)} >
                                            <Card style={{height:'13vw'}} variant="outlined">
                                                <Mui.CardHeader
                                                    action={
                                                        
                                                            <Mui.Chip label={elem.gTag} size="small" sx={{ background: tagColors[randindex] }} variant="filled" />
                                                        
                                                    }
                                                    subheader={elem.groupName}
                                                />
                                                    <Divider />
                                                    <Mui.CardContent className="d-flex justify-content-between">
                                                    <Mui.Typography variant="subtitle2" gutterBottom sx={{fontWeight:'light'}}>
                                                       {elem.description}
                                                    </Mui.Typography>
                                                </Mui.CardContent>
                                                <Mui.CardActions>
                                                <Mui.AvatarGroup>
                                                        <Avatar sx={{ bgcolor: avatarColors[0], width:30, height :30, fontSize: 15}} aria-label="recipe">
                                                            {elem.memberNames[0]}
                                                        </Avatar>
                                                        <Avatar sx={{ bgcolor: avatarColors[1], width:30, height :30 ,fontSize: 15}} aria-label="recipe">
                                                            {elem.memberNames[1]}
                                                        </Avatar>
                                                        <Avatar sx={{ bgcolor: avatarColors[2], width:30, height :30, fontSize: 10}} aria-label="recipe">
                                                             + {elem.memberCount-2}
                                                        </Avatar>
                                                    </Mui.AvatarGroup>
                                                    
                                                    <Mui.IconButton sx={{width:17,height:17}} style={{marginLeft:'auto'}} onClick={handleMoreClick} component={Link} to="/groupsPage">
                                                        <ChevronRightIcon/>
                                                    </Mui.IconButton>
                                                </Mui.CardActions>
                                            </Card>
                                        </Grid>
                                    );})}
                                    
                                </Grid>
                            </div>
                            
                            </Card>
                        </Grid>
                    </Grid>
                </Box>  

        


        </>
    );
}