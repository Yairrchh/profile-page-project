import React from "react";
import img from '../../assets/icon/img-programer.png'
import './index.css'

const AboutMe = () => {
    return (
            <div className="div-container flex flex-wrap justify-center items-center ">
                <div className="div-h1-h3-p w-96 text-white flex flex-col items-center mx-4">
                    <h1 className="text-h1 text-7xl mt-5">Welcome.</h1>
                    <h3 className="text-xl font-medium mt-5">About me</h3>
                    <p className="font-light mt-4">Passionate about web development and knowledgeable about HTML, CSS, JavaScript, typeScript,
                        Git, Git-hub, React, Tailwind.css, Redux, NodeJS, MySQL, PostgreSQL and Xstate.
                        Active Platzi student with several certifications in the Front-End area.
                        Able to create responsive, dynamic and attractive websites for different types of
                        clients and users. Eager to learn new technologies and tools.
                        to improve my skills and contribute to the success of the company.</p>
                </div>
                <figure className="figure-img">
                    <img className="w-full h-full" src={img}/>
                </figure>
            </div>
    )
}

export {AboutMe};