import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import ContactPage from "../../pages/contactPage";
import LandingPage from "../../pages/landingPage";
import ProjectPage from "../../pages/projectPage";
import ResumePage from "../../pages/resumePage";

const RoutingPages =()=>{
    return(
        <section>
            {/* <h1>hi</h1> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route  path="/resume" element= {<ResumePage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/project" element={<ProjectPage/>}/>
                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default RoutingPages