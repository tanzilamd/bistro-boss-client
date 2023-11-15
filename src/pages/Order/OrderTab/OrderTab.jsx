import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";

const OrderTab = ({ items }) => {
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const itemsLength = items.length;
    const [pages, setPages] = useState(Math.ceil(itemsLength / itemsPerPage));

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            console.log(index);
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {items.map((item) => (
                            <FoodCard key={item._id} item={item}></FoodCard>
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default OrderTab;
