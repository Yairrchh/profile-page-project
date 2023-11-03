import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    const activeStyle = 'cursor-pointer  underline underline-offset-8 rounded-md bg-sky-500 p-1.5 hover:shadow-white hover:ease-in-out duration-300'

    return (
        <nav className= "font-sans text-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 border-b border-b-slate-400 ">
            <div>
                <a className="flex gap-5 items-center text-lg">
                    <img className="w-20 h-20 rounded-full" src="https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/88132159_2597930860487211_6294530870166421504_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=x4EOiTIzM7UAX8L71Vm&_nc_ht=scontent-ams2-1.xx&oh=00_AfAnAQ8gGQQ-jlLNDiehZYDvNKAZq-X_9AxhUIri30DjGA&oe=65629DE8" alt="profile pic"/>
                    <p>Yanhfrey Chira
                        <br />
                        <small>Programmer | Frontend Developer and Backend</small>
                    </p>
                </a>
            </div>
            <ul className="flex items-center gap-8">
                <li>
                    <NavLink
                    to = "/"
                    className={({ isActive}) => isActive ? activeStyle : undefined}>
                        Home
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                    to = "/about-me"
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = "/achievements"
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Achievements
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = "/skill-set"
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Skill set
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = "/contact"
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar};