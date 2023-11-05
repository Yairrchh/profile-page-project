import React from "react";
import { Layout } from "../Layout";
import img from '../../assets/icon/img-programer.png'

const AboutMe = () => {
    return (
            <div className="flex justify-between gap-1">
                <div className="text-white flex flex-col items-center mt-12">
                    <h1 className="text-7xl mt-5">Welcome.</h1>
                    <h3 className="text-xl mt-8">About me</h3>
                    <p className="mt-4 mx-36">Passionate about web development and knowledgeable about HTML, CSS, JavaScript, React and NodeJS.
                        Active Platzi student with several certifications in the Front-End area.
                        Able to create responsive, dynamic and attractive websites for different types of
                        clients and users. Eager to learn new technologies and tools.
                        to improve my skills and contribute to the success of the company.</p>
                </div>
                <figure>
                    <img className="-mt-11" src={img}/>
                </figure>
            </div>
    )
}

export {AboutMe};