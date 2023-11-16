import { useContext, useEffect, useRef, useState } from "react";
import img1 from "./../../assets/others/authentication2.png";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                navigate(location?.state ? location.state : "/");

                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Logged in successfully!",
                });
            })
            .catch((error) => console.log(error));
    };

    const handleValidateCaptcha = (e) => {
        e.preventDefault();
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Captcha Validation Done!",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero shadow-2xl min-h-screen bg-auth my-8 font-inter">
                <div className="w-full hero-content flex-col lg:flex-row px-8 py-14">
                    <div className="text-center lg:text-left w-full lg:w-1/2">
                        <img className="w-full" src={img1} alt="" />
                    </div>
                    <div className="card w-full lg:w-1/2">
                        <h1 className="text-4xl font-bold text-center">
                            Login
                        </h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    type="text"
                                    // ref={captchaRef}
                                    onBlurCapture={handleValidateCaptcha}
                                    name="captcha"
                                    placeholder="Enter Captcha Code"
                                    className="input input-bordered"
                                    required
                                />
                                {/* <label className="label">
                                    <button
                                        onClick={handleValidateCaptcha}
                                        className="btn btn-block btn-sm"
                                    >
                                        Validate
                                    </button>
                                </label> */}
                            </div>
                            <div className="form-control mt-2">
                                <input
                                    disabled={disabled}
                                    className="btn bg-authBtn text-white"
                                    type="submit"
                                    value="Login"
                                />
                            </div>

                            <label className="label">
                                <p className="text-center label-text text-[#D1A054]">
                                    New here?{" "}
                                    <Link
                                        className="link font-semibold"
                                        to={"/signup"}
                                    >
                                        Create a New Account
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

export default Login;
