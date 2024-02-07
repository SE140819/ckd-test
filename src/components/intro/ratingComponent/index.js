import { Rating } from "flowbite-react";

const RatingComponent =({ rating }) =>{
    const integerRating = Math.floor(rating);
    return (
        <div className="flex flex-col gap-2">
            <Rating>
                {Array(5)
                    .fill()
                    .map((_, index) => (
                        <Rating.Star key={index} filled={index < integerRating} />
                    ))}
            </Rating>
        </div>
    );
}

export default RatingComponent;
