import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useMediaQuery} from "react-responsive"
import image from '../../assets/icon/myphoto.webp'

import "./navbar.css"

const Navbar = () => {
    const activeStyle = 'cursor-pointer rounded-md bg-sky-500 p-1.5 hover:shadow-white hover:ease-in-out duration-300'

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const isTableOrMobile = useMediaQuery({maxWidth: 767})

    const showMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    //"flex items-center gap-8"

    return (
        <nav className= "font-sans text-white flex flex-wrap justify-center items-center gap-x-72 w-full fixed z-50 top-0 py-2 px-8 border-b border-b-slate-400">
            <div className={`${isTableOrMobile ? 'w-full flex justify-between items-center mt-1' : 'hidden'}`}>
                <NavLink to="/">
                <figure className='flex gap-2 items-center text-lg'>
                    <img className="w-10 h-10 rounded-full" src={image} alt="profile pic"/>
                    <p className="text-sm">Yanhfrey Chira
                        <br />
                        <small>Frontend Developer and Backend</small>
                    </p>
                </figure>
                </NavLink>
                <button className={`${isTableOrMobile ? 'm-1' : 'hidden'}`} onClick={showMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
            </div>
            <div>
                <NavLink to="/">
                <figure className={`${isTableOrMobile ? 'hidden': "flex gap-5 items-center text-lg"}`}>
                    <img className="w-16 h-20 rounded-full" src={image} alt="profile pic"/>
                    <p>Yanhfrey Chira
                        <br />
                        <small>Programmer | Frontend Developer and Backend</small>
                    </p>
                </figure>
                </NavLink>
            </div>
            <ul className={`${isTableOrMobile ? `${isOpenMenu ? 'flex' : 'hidden'} mt-4 flex-col items-center gap-3 text-sm` : "flex items-center gap-8"}`}>
                <li>
                    <NavLink
                    to = "/"
                    className={({ isActive}) => isActive ? activeStyle : undefined}>
                        Home
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                    to = "/briefcase"
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Briefcase
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
                    className={({ isActive }) => isActive ? activeStyle : undefined} onClick={showMenu}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar};