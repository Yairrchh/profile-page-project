import React from "react";

const SkillSetList = ({data}) => {
    return (
        <div className="cursor-pointer flex flex-col items-center w-28 h-28 rounded-lg relative group">
            <figure className=" w-full h-full">
                <img className="w-full h-full" src={data.image} alt={data.name}/>
            </figure>
            <span className="text-xs opacity-0 group-hover:opacity-100 absolute rounded-lg
                bg-gray-800 text-white px-4 py-1 transition delay-150 -translate-y-8 ease-in-out duration-500">{data.name}</span>
        </div>
    )
}

export {SkillSetList};