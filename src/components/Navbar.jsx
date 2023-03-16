import React from "react";
import { Link } from 'react-router-dom';

function Navbar({darkTheme, setDarkTheme}) {
    return (<div className="bg-blue-100 p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
        <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
                <p className="text-2xl dark:text-blue-500">
                    Google Clone
                </p>
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
                {darkTheme ? '💡 Light' : '🌙 Dark'}</button>
        </div>
        {/* <h1> Navbar </h1> */}
    </div>);
}
export default Navbar;
