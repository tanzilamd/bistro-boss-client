import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularItems = data.filter(
                    (item) => item.category === "popular"
                );
                setMenu(popularItems);
                console.log(popularItems);
            });
    }, []);
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From our menu"}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 px-4 md:px-0">
                {menu.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
        </section>
    );
};

export default PopularMenu;
