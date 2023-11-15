import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const offered = menu.filter((item) => item.category === "offered");

    return (
        <div className="mb-16">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg} title={"our menu"}></Cover>

            {/* Offered Items */}
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"today's offer"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* Desserts */}
            <MenuCategory
                items={dessert}
                title={"Desserts"}
                coverImg={dessertImg}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ></MenuCategory>

            {/* Pizza */}
            <MenuCategory
                items={pizza}
                title={"Pizza"}
                coverImg={pizzaImg}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ></MenuCategory>

            {/* Salads */}
            <MenuCategory
                items={salad}
                title={"Salads"}
                coverImg={saladImg}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ></MenuCategory>

            {/* Soups */}
            <MenuCategory
                items={soup}
                title={"Soups"}
                coverImg={soupImg}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ></MenuCategory>
        </div>
    );
};

export default Menu;
