import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ReviewsForm from "../../../forms/ReviewsForm";
import LoadingPage from "../../../pages/LoadingPage";
import ReviewCard from "../ReviewCard";
export default function CourseReviews({ data }) {
  const reviews = data?.map(review=> <ReviewCard key={review.id} review={review} width={50} height={50}/>);
  const [showMore, setShowMore] = useState  (5);
  return (
    <div className="mt-8">
      <h2 className="font-bold text-[#1c1d1f] text-2xl">Reviews</h2>
      <ReviewsForm />
      {reviews?.slice(0, showMore)}
      {showMore <= reviews?.length && (
        <button
          onClick={() => setShowMore(showMore+5)}
          className="bg-transparent px-3 mt-4 h-10 flex text-sm border border-[#1c1d1f] items-center justify-center font-bold"
        >
          see more reviews
        </button>
      )}
    </div>
  ); 
}
