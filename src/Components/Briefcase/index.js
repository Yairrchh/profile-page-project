import React, {useContext} from "react";
import { profilePageContext } from "../../Context";
import { BriefcaseList } from "./BriefcaseList";
import { Layout } from "../Layout";


const Briefcase = () => {

    const context = useContext(profilePageContext);

    return (
        <Layout>
        <section>
            <h3 className="flex justify-center items-center text-4xl tracking-widest text-white">Briefcase</h3>
            <div className="flex flex-wrap mt-16 justify-center items-center gap-9  grid-cols-div">
                {context.dataBriefcase.map((data, index) => (
                    <BriefcaseList
                    data={data}
                    key={`briefcase${index}`}
                    />
                ))}
            </div>
        </section>
        </Layout>
    )
}

export {Briefcase};