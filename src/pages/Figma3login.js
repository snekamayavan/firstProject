import { BackHand, Padding } from "@mui/icons-material";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



 const Figma3login = () =>{
    return (
        <div>
            <Box style={{backgroundColor:"blue" , height:"350px" , color:"white" , display:"flex" , gap:"20px"}}>
                <Box style={{paddingTop:"80px",paddingLeft:"50px"}}>
                    <Typography variant="h5">Sign in</Typography>
                    <Typography variant="h5">Lorem ipsum is simply</Typography>
                    <Typography style={{width:"450px",paddingTop:"20px"}} variant="body2">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy the ever since the 1500s,</Typography>
                </Box>
                <Box style={{paddingTop:"10px"}}>
                    <img  style={{height:"300px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1765775692/Screenshot_2025-12-15_104237_pabwst.png"/>
                </Box>
            </Box>
            <div style={{padding:"40px 0 0 60px" ,display:"flex",gap:"20px"}}>
                <Box>
                    <div style={{border:"0.1rem solid gray" , width:"150px" , textAlign:"center" , padding:"10px" , borderRadius:"15px" , backgroundColor:"lightblue"}}>
                        <div style={{textAlign:"right"}}>
                            <HighlightOffIcon style={{color:"gray"}}/>
                        </div>
                        <div style={{display:"flex" , justifyContent:"center"}}>
                            <Avatar style={{width:'80px',height:"80px"}} src="https://img.freepik.com/free-photo/cheerful-girl-cashmere-sweater-laughs-against-backdrop-blossoming-sakura-portrait-woman-yellow-hoodie-city-spring_197531-17886.jpg?semt=ais_hybrid&w=740&q=80"/>
                        </div>
                        <Typography style={{paddingTop:"15px"}} variant="h5">Alina shmen</Typography>
                        <Typography style={{color:"gray"}} variant="body2">Active 5hrs ago</Typography>
                    </div>
                </Box>
                <Box>
                    <div style={{border:"0.1rem solid gray" , width:"150px" , textAlign:"center" , padding:"10px" , borderRadius:"15px" , backgroundColor:"lightblue"}}>
                        <div style={{textAlign:"right"}}>
                            <HighlightOffIcon style={{color:"gray"}}/>
                        </div>
                        <div style={{display:"flex" , justifyContent:"center"}}>
                            <Avatar style={{width:'80px',height:"80px"}} src="https://img.freepik.com/free-photo/cheerful-girl-cashmere-sweater-laughs-against-backdrop-blossoming-sakura-portrait-woman-yellow-hoodie-city-spring_197531-17886.jpg?semt=ais_hybrid&w=740&q=80"/>
                        </div>
                        <Typography style={{paddingTop:"15px"}} variant="h5">Alina shmen</Typography>
                        <Typography style={{color:"gray"}} variant="body2">Active 5hrs ago</Typography>
                    </div>
                </Box>
            </div>
        </div>
    )
 }
 export default Figma3login;