import React from "react";
import { Layout } from "../../Components/Layout";
import { Briefcase } from "../../Components/Briefcase";
import { AboutMe } from "../AboutMe";
import { SkillSet } from "../../Components/SkillSet";

const Home = () => {
    return (
        <Layout>
            <Briefcase/>
            <AboutMe/>
            <SkillSet/>
        </Layout>
    )
}

export {Home};