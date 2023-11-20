import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                };

                axiosPublic
                    .post("/users", userInfo)
                    .then((res) => {
                        console.log(res.data);

                        navigate("/");
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };
    return (
        <div>
            <div className="divider">OR</div>
            <div className="flex justify-center gap-2">
                <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                    <FaGoogle className="text-3xl"></FaGoogle>
                </button>

                <button className="btn btn-ghost">
                    <FaGithub className="text-3xl"></FaGithub>
                </button>

                <button className="btn btn-ghost">
                    <FaFacebookF className="text-3xl"></FaFacebookF>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
