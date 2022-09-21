import Image from "next/image";
import StarBar from "../../../atoms/StarBar";
import LoadingPage from "../../../pages/LoadingPage";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import LikeAndDisLike from "../../../atoms/LikeAndDisLike";
export default function ReviewCard({review}){
    if(review) return (
      <div className="flex flex-row border-b border-[rgb(168,168,168)] mt-4 pb-4 gap-7 w-full">
        <div>
            <div className="rounded-[50%] w-[50px] h-[50px] bg-black flex items-center justify-center">
            <h5 className="text-white font-bold">{review.user.initials}</h5>
            </div>
        </div>
        
        <div className="flex flex-col grow gap-1">
            <h3 className="text-sm font-bold">{review.user.name}</h3>
            <div className="flex flex-row gap-3">
                <StarBar count={Math.round(review.rating)} color={"rgb(255,188,11)"}/>
                <p className="text-sm text-[#4d4c4d]">{review.created_formatted_with_time_since}</p>
            </div>
            <p>{review.content}</p>
            <p className="text-xs text-[#4d4c4d]">Was this review helpful?</p>
            <div className="flex flex-row gap-7 mt-1 items-center">
                <LikeAndDisLike/>
                <u className="text-[#4d4c4d] text-xs">Report</u>
            </div>
        </div>
      </div>
    ); else return <LoadingPage/>
}