import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = (food) => {
        // console.log(food, user.email);

        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            };

            axiosSecure
                .post("/carts", cartItem)
                .then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: `${name} added to your cart`,
                            timer: 1500,
                            showConfirmButton: false,
                        });

                        refetch();
                    }
                    console.log(res.data);
                })
                .catch((error) => console.log(error));
        } else {
            Swal.fire({
                icon: "error",
                title: "You are not logged in",
                text: "Please login to add to the cart!",
                showCancelButton: true,
                confirmButtonText: "Login",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: location.pathname });
                }
            });
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p className="absolute bg-slate-900 text-white right-2 top-2 px-4 py-2 font-semibold">
                ${price}
            </p>
            <div className="card-body flex flex-col items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline mt-4 bg-slate-100 border-orange-600 border-0 border-b-4 mx-auto justify-center flex uppercase"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
