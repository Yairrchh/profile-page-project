import React from "react"
import { Footer } from "../Footer";

const Layout = ({children}) => {
    return (
        <>
        <div className="flex flex-col mt-36 mb-16">
            {children}
        </div>
        <Footer/>
        </>
    )
}

export {Layout};