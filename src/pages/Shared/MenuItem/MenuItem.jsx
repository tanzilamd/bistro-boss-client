const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="flex items-center gap-4">
            <img
                style={{ borderRadius: "0px 200px 200px 200px" }}
                className="w-28"
                src={image}
                alt=""
            />
            <div className="">
                <h3 className="uppercase text-lg">{name} ----</h3>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;
