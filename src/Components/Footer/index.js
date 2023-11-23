import React from "react";
import github from "../../assets/icon/github.svg"
import instagram from "../../assets/icon/instagram.svg"
import linkedin from "../../assets/icon/linkedin.svg"
import gmail from "../../assets/icon/pngwing.com.svg"


const Footer = () => {
    return (
        <footer className=" bg-blue-500 text-white h-32 bottom-0">
            <div className="flex flex-col items-center">
                <div className=" flex gap-4 items-center w-56 h-20">
                    <a href="https://github.com/Yairrchh" target="_blank" rel="noopener noreferrer">
                        <img src={github} />
                    </a>
                    <a href="https://instagram.com/yairrch?igshid=YXpzMzBldHdpcjU3"  target="_blank" rel="noopener noreferrer">
                        <img src={instagram}/>
                    </a>
                    <a href="https://www.linkedin.com/in/yair-chira/"  target="_blank" rel="noopener noreferrer">
                        <img src={linkedin}/>
                    </a>
                    <a href="mailto:chirayair@gmail.com"  target="_blank" rel="noopener noreferrer">
                        <img src={gmail}/>
                    </a>
                </div>
                <p className="text-center font-light mx-3">Developed and designed by Yanhfrey Chira. @2023. All rights reserved</p>
            </div>
        </footer>

    )
}

export {Footer};