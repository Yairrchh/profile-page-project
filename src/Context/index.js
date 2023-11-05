import React from "react";
import {createContext, useState, useEffect} from "react";
import { briefcaseBD } from "../dataBases/briefcaseBD";
import { skillSetBD } from "../dataBases/skillSetBD";
import { achievementsBD } from "../dataBases/achievementsBD";

const profilePageContext = createContext();

const ProfilePageProvider = ({children}) => {
    //state of briefcase
    const [dataBriefcase, setDataBriefcase] = useState([]);

    //state of skillSet
    const [dataSkillSet, setDataSkillSet] = useState([]);

    //state of achievements
    const [dataAchievements, setDataAchievements] = useState([]);

    // state of loading page
    const [loading, setLoading] = useState(true)

    //Open modal

    useEffect(() => {
        setTimeout(() => {
            setDataBriefcase(briefcaseBD);
            setDataSkillSet(skillSetBD);
            setDataAchievements(achievementsBD);
        }, 500)
    },[])

    return (
        <profilePageContext.Provider
            value={{
                dataBriefcase,
                setDataBriefcase,
                loading,
                setLoading,
                dataSkillSet,
                setDataSkillSet,
                dataAchievements,
                setDataAchievements,
            }}
        >
            {children}
        </profilePageContext.Provider>
    )
}

export {profilePageContext, ProfilePageProvider};