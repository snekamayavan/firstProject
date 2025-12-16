import React from "react";
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Figmaregister from "../pages/Figmaregister"
import Figmalogin from "../pages/Figmalogin"
import Figma2login from"../pages/Figma2login"
import Figma2register from "../pages/Figma2register"
import Figma3login from "../pages/Figma3login"



const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Figmalogin />} />
                <Route exact path="/register" element={<Figmaregister />}/>
                <Route exact path="/figma2login" element={<Figma2login/>}/>
                <Route exact path="/figma2register" element={<Figma2register/>}/>
                <Route exact path="/figma3login" element={<Figma3login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;