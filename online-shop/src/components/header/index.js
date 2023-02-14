import React from "react";
import {Outlet} from "react-router-dom";

export const Header = () => {
    return (
        <>
        <nav>
            <button>user</button>
            <button>contacts</button>
            <button>shop</button>
            <button>cart</button>
        </nav>
        <Outlet/>
        </>
        
    )
}