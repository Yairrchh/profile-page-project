import React from "react";
import github from "../../assets/icon/github.svg"
import instagram from "../../assets/icon/instagram.svg"
import linkedin from "../../assets/icon/linkedin.svg"


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white h-32">
            <div className="flex flex-col items-center">
                <div className=" flex gap-4 items-center w-36 h-20">
                    <a href="https://github.com/Yairrchh" target="_blank" rel="noopener noreferrer">
                        <img src={github} />
                    </a>
                    <a href="#"  target="_blank" rel="noopener noreferrer">
                        <img src={instagram}/>
                    </a>
                    <a href="https://www.linkedin.com/in/yair-chira/"  target="_blank" rel="noopener noreferrer">
                        <img src={linkedin}/>
                    </a>
                </div>
                <p>Developed and designed by Yanhfrey Chira. @2023. All rights reserved</p>
            </div>
        </footer>

    )
}

export {Footer};