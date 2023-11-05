import React, { useContext } from "react";
import { profilePageContext } from "../../Context";
import { Layout } from "../Layout";
import { SkillSetList } from "./SkillSetList";

const SkillSet = () => {

    const context = useContext(profilePageContext)

    return (
            <section>
                <h3 className="flex justify-center items-center mt-6 text-4xl tracking-widest text-white mb-10">Skill set</h3>
                <div className="flex flex-wrap mt-16 mx-7 justify-center items-center gap-16 grid-cols-div">
                    {
                        context.dataSkillSet.map((data, index) => (
                            <SkillSetList
                            data={data}
                            key={`skillSet${index}`}
                            />
                        ))
                    }
                </div>
            </section>
    )
}

export {SkillSet};