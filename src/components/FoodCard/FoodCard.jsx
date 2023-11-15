const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p className="absolute bg-slate-900 text-white right-2 top-2 px-4 py-2 font-semibold">
                ${price}
            </p>
            <div className="card-body flex flex-col items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline mt-4 bg-slate-100 border-orange-600 border-0 border-b-4 mx-auto justify-center flex uppercase">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
