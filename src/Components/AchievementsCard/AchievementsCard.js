import React from "react";

const AchievementsCard = ({data,onOpenModal}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60"
        onClick={onOpenModal}>
            <img className="w-1/2 h-10/12" src={data.image} alt={data.name}/>
        </div>
    )
}

export {AchievementsCard};