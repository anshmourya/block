import { AiFillStar } from "react-icons/ai";

interface ratingProps {
  rating: number | string;
}
const Rating = ({ rating }: ratingProps) => {
  return (
    <span
      className={`flex items-center w-10 text-center text-white ${
        Number(rating) > 3 ? "bg-green-400" : "bg-amber-600"
      } justify-evenly rounded-md`}
    >
      <AiFillStar />
      {rating}
    </span>
  );
};

export default Rating;
