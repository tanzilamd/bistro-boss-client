import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter((item) => item.category === "popular");

    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch("/menu.json")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const popularItems = data.filter(
    //                 (item) => item.category === "popular"
    //             );
    //             setMenu(popularItems);
    //             console.log(popularItems);
    //         });
    // }, []);
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From our menu"}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 px-4 md:px-0">
                {popularItems.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>

            <Link to={"/order"}>
                <button className="btn btn-outline mt-6 border-0 border-b-4 mx-auto justify-center flex uppercase">
                    View Full Menu
                </button>
            </Link>
        </section>
    );
};

export default PopularMenu;
