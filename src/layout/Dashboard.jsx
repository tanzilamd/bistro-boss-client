import { NavLink, Outlet } from "react-router-dom";
import {
    FaAd,
    FaBook,
    FaCalendar,
    FaEnvelope,
    FaHome,
    FaList,
    FaSearch,
    FaShoppingCart,
    FaUsers,
    FaUtensilSpoon,
    FaVoicemail,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    // Get isAdmin value from database
    const isAdmin = true;

    return (
        <div className="flex font-inter">
            <div className="w-64 min-h-screen bg-orange-600 text-white">
                <ul className="menu p-4">
                    {isAdmin ? (
                        <>
                            <li className="my-1">
                                <NavLink to={"/dashboard/adminHome"}>
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to={"/dashboard/addItems"}>
                                    <FaUtensilSpoon /> Add Items
                                </NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to={"/dashboard/manageItems"}>
                                    <FaList /> Manage Items
                                </NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to={"/dashboard/bookings"}>
                                    <FaBook /> Manage Bookings
                                </NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to={"/dashboard/users"}>
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="my-1">
                                <NavLink to={"/dashboard/userHome"}>
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to={"/dashboard/reservation"}>
                                    <FaCalendar /> Reservation
                                </NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to={"/dashboard/cart"}>
                                    <FaShoppingCart /> My Cart ({cart.length})
                                </NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to={"/dashboard/review"}>
                                    <MdReviews /> Review
                                </NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to={"/dashboard/bookings"}>
                                    <FaBook /> Bookings
                                </NavLink>
                            </li>
                        </>
                    )}

                    <div className="divider"></div>

                    <li className="my-1">
                        <NavLink to={"/"}>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li className="my-1">
                        <NavLink to={"/order/salad"}>
                            <FaSearch /> Menu
                        </NavLink>
                    </li>
                    <li className="my-1">
                        <NavLink to={"/contact"}>
                            <FaEnvelope /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
