import React, { useContext } from "react";
import { profilePageContext } from "../../Context";
import { Layout } from "../Layout";
import { SkillSetList } from "./SkillSetList";

const SkillSet = () => {

    const context = useContext(profilePageContext)

    return (
        <Layout>
            <section>
                <h3 className="flex justify-center items-center text-4xl tracking-widest text-white">Skill set</h3>
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
        </Layout>
    )
}

export {SkillSet};