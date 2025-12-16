import React from "react";
import { Box, Button, Checkbox, TextField, Typography  } from "@mui/material";





const Figma2 = () =>{
    return(
        <div style={{ position:"relative"}}>
            <Box style={{display:"flex",justifyContent:"space-between" , height:"100vh", alignItems:"center" , paddingLeft:"70px"}}>
                <Box style={{width:'700px'}}>
                    <Typography variant="h3">Register with Lorem</Typography>
                    <Typography style={{width:"350px" , padding:"10px 0"}} variant="body2">Lorm  lpsum is simply dumy text of the printing and typeseting industry</Typography>
                    <Box>
                        <Typography style={{padding:"10px 0"}} variant="h6">Email address</Typography>
                        <TextField  style={{width:"350px"}}  variant="outlined" placeholder="Email"/>            
                    </Box>
                    <Box>
                        <Typography style={{padding:"10px 0"}} variant="h6">User name</Typography>
                        <TextField style={{width:"350px"}}  variant="outlined" placeholder="User name"/>
                    </Box>
                    <Box>
                        <Typography style={{padding:"10px 0"}} variant="h6">Password</Typography>
                        <TextField style={{width:"350px"}}  variant="outlined" placeholder="Password"/>
                    </Box>
                    <Box style={{display:"flex", width:"350px", justifyContent:"space-between" , padding:"15px 0"}}>
                        <Box>
                            <Checkbox/>Remember me?
                        </Box>
                        <Box style={{paddingTop:'8px'}}>
                            <a href="#">Forgot Password</a>
                        </Box>
                    </Box>
                    <Box>
                        <Button style={{width:"350px",padding:"10px" , backgroundColor:"blue",color:"white",borderRadius:"5px",border:"none"}}>Register</Button>
                    </Box>
                </Box>
                <Box style={{backgroundColor:"blue",width:"800px",height:"100vh"}}>
                    <Box style={{position:"absolute",top:"60px",left:"560px"}}>       
                        <img style={{width:"600px",height:"500px" , borderRadius:"10px",}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1765263662/pexels-pixabay-220455_1_vmumrm.jpg" />
                    </Box>
                    
                </Box>
            </Box>
        </div>
    )
}

export default Figma2;