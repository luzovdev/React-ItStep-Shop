import React from "react";
import { Link} from 'react-router-dom'


export const NotFound = () => {
    return (
    <>
        <h1>Page not Found</h1>
        <Link to = "/">Go to main page</Link>
    </>
    )
}