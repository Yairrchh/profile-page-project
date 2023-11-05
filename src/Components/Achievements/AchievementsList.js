import React, { useContext,useState } from "react";
import { profilePageContext } from "../../Context";
import { AchievementsCard } from "../AchievementsCard/AchievementsCard";
import { Modal } from "../Modal";

const AchievementsList = ({data}) => {

    const context = useContext(profilePageContext)
    const [openModal, setOpenModal] = useState(false);


    const onOpenModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <div className="bg-white cursor-pointer border border-blue-300 flex flex-col items-center w-48 h-56 rounded-lg
        transition-transform transform-gpu hover:scale-110 ease-out duration-300">
            <figure className="w-20 h-20 mt-5">
                <img className="w-full h-full" src={data.logo} alt={data.name}/>
            </figure>
            <div className="text-center mt-3 h-10 mx-2" >
                <span className="text-xs">{data.name}</span>
            </div>
            <div className="relative mt-2">
                <button onClick={() => onOpenModal()} className="text-white rounded-lg mt-3 bg-sky-500 px-12 py-1 hover:bg-green-400 hover:text-black hover:ease-in-out duration-300">View</button>
            </div>
            {
                openModal && (
                    <Modal onOpenModal={onOpenModal}>
                        <AchievementsCard
                        onOpenModal={onOpenModal}
                        data={data}
                        />
                    </Modal>
                )
            }
        </div>
    )
}

export {AchievementsList};