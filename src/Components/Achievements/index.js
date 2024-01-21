import React, { useContext } from "react";
import { profilePageContext } from "../../Context";
//import { Layout } from "../Layout";
import { AchievementsList } from "./AchievementsList";
import { Layout } from "../Layout";

const Achievements = () => {

    const context = useContext(profilePageContext);

    return (
                <section className="mb-20">
                    <h3 className="flex justify-center mt-6 items-center text-4xl tracking-widest text-white">Achievements</h3>
                    <div className="flex flex-wrap mt-16 mx-7 justify-center items-center gap-12 grid-cols-div">
                        {
                            context.dataAchievements.map((data, index) => (
                                <AchievementsList
                                data={data}
                                key={`achievements${index}`}
                                />
                            ))
                        }
                    </div>
                </section>
    )
}

export {Achievements};