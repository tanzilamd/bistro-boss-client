import { Link, useNavigate } from "react-router-dom";
import img1 from "./../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { createUser, userName } = useContext(AuthContext);
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            userName(data.name);

            navigate("/");
        });
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero shadow-2xl min-h-screen bg-auth my-8 font-inter">
                <div className="w-full hero-content flex-col lg:flex-row px-8 py-14">
                    <div className="text-center lg:text-left w-full lg:w-1/2">
                        <img className="w-full" src={img1} alt="" />
                    </div>
                    <div className="card w-full lg:w-1/2">
                        <h1 className="text-4xl font-bold text-center">
                            Sign Up
                        </h1>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Enter your Name"
                                    className="input input-bordered"
                                />
                                {errors.name?.type === "required" && (
                                    <label className="label">
                                        <span className="label-text text-red-500 text-xs">
                                            This field is required
                                        </span>
                                    </label>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: true,
                                    })}
                                    placeholder="Enter your Email"
                                    className="input input-bordered"
                                />
                                {errors.email?.type === "required" && (
                                    <label className="label">
                                        <span className="label-text text-red-500 text-xs">
                                            This field is required
                                        </span>
                                    </label>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })}
                                    placeholder="Enter your Password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === "required" && (
                                    <label className="label">
                                        <span className="label-text text-red-500 text-xs">
                                            This field is required
                                        </span>
                                    </label>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <label className="label">
                                        <span className="label-text text-red-500 text-xs">
                                            Password must have one uppercase,
                                            one lowercase, one number and one
                                            special character
                                        </span>
                                    </label>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <label className="label">
                                        <span className="label-text text-red-500 text-xs">
                                            6 Characters Required
                                        </span>
                                    </label>
                                )}
                            </div>
                            <div className="form-control mt-2">
                                <input
                                    className="btn bg-authBtn text-white"
                                    type="submit"
                                    value="Sign Up"
                                />
                            </div>
                            <label className="label">
                                <p className="text-center label-text text-[#D1A054]">
                                    Already registered?{" "}
                                    <Link
                                        className="link font-semibold"
                                        to={"/login"}
                                    >
                                        Go to log in
                                    </Link>
                                </p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
