import React from "react";
import { Layout } from "../../Components/Layout";
import { Briefcase } from "../../Components/Briefcase";
import { AboutMe } from "../../Components/AboutMe";
import { SkillSet } from "../../Components/SkillSet";
import { Achievements } from "../../Components/Achievements";
//import { Footer } from "../../Components/Footer";
import { Contact } from "../../Components/Contact";

const Home = () => {
    return (
        <>
            <Layout>
                <AboutMe/>
                <Briefcase/>
                <Achievements/>
                <SkillSet/>
                <Contact/>
            </Layout>
        </>
    )
}

export {Home};