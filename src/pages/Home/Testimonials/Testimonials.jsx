import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setReviews(data);
            });
    }, []);
    return (
        <section>
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"Testimonials"}
            ></SectionTitle>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center my-20 mx-14 text-center space-y-4">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className="text-orange-500 text-xl">
                                - {review.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
