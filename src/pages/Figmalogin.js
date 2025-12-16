import React from "react";
import {Box, Button, Checkbox, TextField, Typography} from "@mui/material";

function Figma1() {
  
  return (
    <div style={{position:"relative"}}>
        <Box style={{display:"flex" , justifyContent:"space-between",height:"100vh", alignItems:"center" , paddingLeft:"60px"}}>
            <Box style={{width:"800px"}}>
              <Typography variant="h3">Login with Lorem</Typography>
              <Typography variant="body2" style={{width:"350px",padding:"10px 0"}}> Lorem lpsum is simply dummy text of the printing and typesetting industry.</Typography>
              <Box>
                <Typography style={{padding:"10px 0"}} variant="h6">User Name</Typography>
                <TextField style={{width:"350px" }} variant="outlined" placeholder="User Name"/>
              </Box>
              <Box>
                <Typography style={{padding:"10px 0"}} variant="h6">Password</Typography>
                <TextField style={{width:"350px"}} variant="outlined" placeholder="**********" />
              </Box>
              <Box style={{display:"flex" , justifyContent:"space-between" , width:"350px" , padding:"16px 0"}}>
                <Box>
                  <Checkbox />Remember me
                </Box>
                <Box>
                  <a href="#">Forget Password</a>
                </Box>
              </Box>
              <Box>
                  <Button style={{width:"350px" , padding:"10px" , color:"white" , background:"blue",border:"none" }}>Login</Button>
              </Box>
            </Box>
            <Box style={{backgroundColor:"blue" , width:"800px" , height:"100vh"}}>
              <Box style={{position:"absolute" , top:"60px" ,left:"550px"}}>
                <img style={{width:"600px" , height:"500px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1765263662/pexels-pixabay-220455_1_vmumrm.jpg" />
              </Box>
            </Box>
        </Box>
    </div>
  );
}
export default Figma1;
