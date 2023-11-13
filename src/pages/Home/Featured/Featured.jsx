import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "./../../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <section className="bg-featured bg-fixed cover my-16 py-8 text-white">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Item"}
            ></SectionTitle>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-16 py-8 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error voluptate facere, deserunt dolores maiores quod
                        nobis quas quasi. Eaque repellat recusandae ad
                        laudantium tempore consequatur consequuntur omnis ullam
                        maxime tenetur.
                    </p>
                    <button className="btn btn-outline text-white mt-4 border-0 border-b-4">
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Featured;
