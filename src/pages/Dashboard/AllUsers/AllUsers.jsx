import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });

    const handleDeleteUser = (user) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You want to delete this item",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`).then((res) => {
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

    const handleMakeAdmin = (user) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You want to make admin",
            showCancelButton: true,
            confirmButtonText: "Give Admin Role",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
                    console.log(res);

                    if (res.status === 200) {
                        refetch();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Admin Role Given!",
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
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">All Users</h2>
                <h2 className="text-2xl font-bold">
                    Total Users: {users.length}
                </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role === "admin" ? (
                                        "Admin"
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleMakeAdmin(user)
                                            }
                                            className="btn btn-ghost btn-sm"
                                        >
                                            <FaUsers className="text-2xl text-orange-500"></FaUsers>
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
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
    );
};

export default AllUsers;
