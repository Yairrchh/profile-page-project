import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { AboutMe } from "../Components/AboutMe";
import { BriefcasePage } from "../Pages/BriefcasePage";
import { AchievementsPage } from "../Pages/AchievementsPage";
import { ContactPage } from "../Pages/ContactPage";
import { SkillSetPage } from "../Pages/SkillSetPage";
import { NotFound } from "../Pages/NotFound";
import { Navbar } from "../Components/Navbar";
import { ProfilePageProvider } from "../Context";
import "./index.css"

const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/briefcase', element: <BriefcasePage/>},
        {path: '/achievements', element: <AchievementsPage/>},
        {path: '/contact', element: <ContactPage/>},
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