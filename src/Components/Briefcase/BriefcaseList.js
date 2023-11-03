import React from "react";
import { Link } from "react-router-dom";
import { profilePageContext } from "../../Context";
import { useContext } from "react";

const BriefcaseList = ({data}) => {

    const context = useContext(profilePageContext);

    React.useEffect(() => {
        if(context.loading) {
            setTimeout (() => {
                context.setLoading(false)
            }, 1500)
        } else {
            null
        }
    }, [context.loading])


    if(!context.loading) {
        return(
            <div className="bg-white cursor-pointer flex flex-col items-center w-64 h-128 rounded-lg transition-transform transform-gpu hover:scale-110 ease-out duration-300">
            <figure className="relative mt-7 w-44 h-44 shadow-md shadow-slate-300 rounded-lg">
                <img className="w-full h-full object-cover flex items-center rounded-lg" src={data.image} alt={data.name}/>
            </figure>
            <div className="flex flex-col px-2 items-center mt-1">
                <span className="text-base font-semibold mt-3">{data.name}</span>
                <span className="text-sm font-light m-3">{data.description}</span>
            </div>
            <div className="flex flex-col px-2 items-center">
                <Link>
                    <button className="text-base text-white font-normal rounded-lg bg-sky-500 px-5 py-1 mt-5 hover:bg-cyan-600 hover:ease-in-out duration-300" name={data.name} to={data.linkDeploy}>Watch Here</button>
                </Link>
                <Link>
                    <button className="text-base text-white font-normal rounded-lg bg-sky-500 px-5 py-1 mt-5 hover:bg-cyan-600 hover:ease-in-out duration-300" name={data.name} to={data.linkRepository}>Repository</button>
                </Link>
            </div>
        </div>
        )
    } else {
        return (
            <div className="bg-gray-300 cursor-pointer flex flex-col items-center w-64 h-128 rounded-lg transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                <figure className="relative mt-7 w-44 h-44 shadow-md shadow-slate-300 rounded-lg">
                    <img className="w-full h-full object-cover flex items-center rounded-lg"/>
                </figure>
                <div className="bg-gray-500 rounded-lg flex flex-col px-12 items-center mt-12">
                    <span className="text-base font-semibold mt-3"></span>
                    <span className="text-sm font-light m-3"></span>
                </div>
                <div className="flex flex-col px-2 mt-5 items-center">
                    <button className="text-base text-white font-normal rounded-lg bg-sky-500 px-12 py-1 mt-5 hover:bg-cyan-600 hover:ease-in-out duration-300"/>
                    <button className="text-base text-white font-normal rounded-lg bg-sky-500 px-12 py-1 mt-5 hover:bg-cyan-600 hover:ease-in-out duration-300"/>
                </div>
            </div>
        )
    }
}

export {BriefcaseList}