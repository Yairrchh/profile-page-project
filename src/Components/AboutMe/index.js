import React from "react";
import img from '../../assets/icon/img-programer.png'
import './index.css'

const AboutMe = () => {
    return (
            <div className="div-container flex flex-wrap justify-center items-center ">
                <div className="div-h1-h3-p w-96 text-white flex flex-col items-center mx-4">
                    <h1 className="text-h1 text-7xl mt-5">Welcome.</h1>
                    <h3 className="text-xl font-medium mt-5">About me</h3>
                    <p className="font-light mt-4">
                        Passionate front-end developer with 2 years of experience in creating responsive, engaging, and dynamic websites that drive business growth.
I have a solid understanding of HTML, CSS, Javascript, Typescript, React.js, Next.js, Vue.js, and Node.js and hold several certifications in both the front-end and back-end areas.
I pride myself on my ability to work independently and also as part of a team, and I have been fortunate to work with companies that have given me the opportunity to apply my skills on projects. I am always looking for ways to improve and learn new skills. Through collaboration I have learned new techniques, explored design patterns, and discovered creative solutions.
                    </p>
                </div>
                <figure className="figure-img">
                    <img className="w-full h-full" src={img}/>
                </figure>
            </div>
    )
}

export {AboutMe};