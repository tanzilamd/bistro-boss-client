import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, title, coverImg, description }) => {
    return (
        <div className="mt-10">
            {title && (
                <Cover
                    img={coverImg}
                    title={title}
                    description={description}
                ></Cover>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 px-4 md:px-0">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>

            <Link to={`/order/${title}`}>
                <button className="btn btn-sm btn-outline mt-12 mb-8 border-0 border-b-4 mx-auto justify-center flex uppercase">
                    ORDER YOUR FAVOURITE FOOD
                </button>
            </Link>
        </div>
    );
};

export default MenuCategory;
