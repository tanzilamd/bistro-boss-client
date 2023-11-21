import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { "content-type": "multipart/form-data" },
        });
        console.log(res.data);

        if (res.data.success) {
            // send menu item data to server
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            };

            const menuRes = await axiosSecure.post("/menu", menuItem);
            console.log(menuRes.data);

            if (menuRes.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: `Item Added Successfully`,
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        }
    };
    return (
        <div>
            <SectionTitle
                subHeading={"What's new?"}
                heading={"Add an item"}
            ></SectionTitle>

            <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="form-control w-full col-span-2">
                    <label className="label">
                        <span className="label-text">Recipe Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        className="input input-bordered w-full"
                        {...register("name")}
                        required
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        defaultValue={"default"}
                        className="select select-bordered w-full"
                        {...register("category")}
                        required
                    >
                        <option value={"default"} disabled>
                            Select a Category
                        </option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full"
                        {...register("price")}
                        required
                    />
                </div>

                <div className="form-control w-full col-span-2">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Description"
                        className="textarea textarea-bordered w-full h-24"
                        {...register("recipe")}
                        required
                    />
                </div>

                <div className="form-control w-full col-span-2">
                    <input
                        {...register("image")}
                        type="file"
                        className="file-input file-input-bordered w-full max-w-xs"
                        required
                    />
                </div>

                <button className="col-span-2 btn btn-neutral text-white">
                    Add Item <FaUtensilSpoon></FaUtensilSpoon>
                </button>
            </form>
        </div>
    );
};

export default AddItems;
