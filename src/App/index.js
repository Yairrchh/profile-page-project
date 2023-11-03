import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { AboutMe } from "../Pages/AboutMe";
import { Achievements } from "../Pages/Achievements";
import { Contact } from "../Pages/Contact";
import { SkillSetPage } from "../Pages/SkillSetPage";
import { NotFound } from "../Pages/NotFound";
import { Navbar } from "../Components/Navbar";
import { ProfilePageProvider } from "../Context";
import "./index.css"

const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/about-me', element: <AboutMe/>},
        {path: '/achievements', element: <Achievements/>},
        {path: '/contact', element: <Contact/>},
        {path: '/skill-set', element: <SkillSetPage/>},
        {path: '/*', element: <NotFound/>},
    ]);
    return routes
}

const App = () => {

    return (
        <ProfilePageProvider>
            <BrowserRouter>
                <AppRoutes/>
                <Navbar/>
            </BrowserRouter>
        </ProfilePageProvider>
    )
};

export {App};