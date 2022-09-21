import { useState } from "react";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";

export default function LikeButton({ isLike = true, active,handleClick }) {
  return (
    <button onClick={handleClick} className="rounded-[50px] w-[35px] h-[35px] border flex items-center justify-center border-black hover:bg-gray-400 cursor-pointer">
      {isLike ? (active?<FaThumbsUp size={20}/>: <FaRegThumbsUp size={20}/>) : (active?<FaThumbsDown size={20} />:<FaRegThumbsDown/>)}
    </button>
  );
}
