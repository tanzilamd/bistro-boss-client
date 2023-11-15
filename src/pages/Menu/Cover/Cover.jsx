import { Parallax } from "react-parallax";
const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="cover"
            strength={-200}
            className="mb-8"
        >
            <div className="hero h-[550px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:w-2/3">
                        <h1 className="mb-5 text-5xl font-bold uppercase">
                            {title}
                        </h1>
                        <p className="mb-5">
                            {description
                                ? description
                                : "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
