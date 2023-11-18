import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You want to delete this item",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`).then((res) => {
                    console.log(res.data);

                    if (res.data.deletedCount > 0) {
                        refetch();

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Deleted Successfully!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
            }
        });
    };
    return (
        <div className="font-inter">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Items: {cart.length}</h2>
                <h2 className="text-2xl font-bold">
                    Total Price: ${totalPrice}
                </h2>
                <button className="btn btn-primary">Pay Now</button>
            </div>

            {/* Show cart data on table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {cart.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-sm"
                                    >
                                        <FaTrash className="text-lg text-red-600"></FaTrash>
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
