import { NavLink, Outlet } from "react-router-dom";
import {
    FaBook,
    FaCalendar,
    FaHome,
    FaSearch,
    FaShoppingCart,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    return (
        <div className="flex font-inter">
            <div className="w-64 min-h-screen bg-orange-600 text-white">
                <ul className="menu p-4">
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
                </ul>
            </div>
            <div className="flex-1 p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
