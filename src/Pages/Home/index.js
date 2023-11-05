import React from "react";
import { Layout } from "../../Components/Layout";
import { Briefcase } from "../../Components/Briefcase";
import { AboutMe } from "../../Components/AboutMe";
import { SkillSet } from "../../Components/SkillSet";
import { Achievements } from "../../Components/Achievements";
import { Footer } from "../../Components/Footer";

const Home = () => {
    return (
        <>
            <Layout>
                <AboutMe/>
                <Briefcase/>
                <Achievements/>
                <SkillSet/>
            </Layout>
        </>
    )
}

export {Home};