import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import axios from "axios";

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const handleDeleteItem = (item) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You want to delete this item",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosSecure.delete(`/menu/${item._id}`).then((res) => {
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
        <div>
            <SectionTitle
                heading={"Manage items"}
                subHeading={"Hurry up"}
            ></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {menu.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item.image}
                                                        alt="item"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-sm">
                                            <FaEdit className="text-lg text-orange-600"></FaEdit>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDeleteItem(item)
                                            }
                                            className="btn btn-ghost btn-sm"
                                        >
                                            <FaTrash className="text-lg text-red-600"></FaTrash>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
