import React from "react";
//import ReactDOM from 'react-dom/client';
import { createPortal } from "react-dom";

const Modal = ({children, onOpenModal}) => {
    return createPortal(
        <div className="cursor-pointer" onClick={onOpenModal}>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export {Modal};