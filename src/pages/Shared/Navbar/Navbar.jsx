import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navOptions = (
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/menu"}>Our Menu</NavLink>
            </li>
            <li>
                <NavLink to={"/order/salad"}>Order Food</NavLink>
            </li>
        </>
    );
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <Link
                        to={"/"}
                        className="btn btn-ghost text-xl font-cinzel"
                    >
                        Bistro Boss
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold activeNav">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/login"} className="btn btn-sm bg-white">
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
