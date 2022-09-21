import CheckIcon from "../../../../public/icons/CheckIcon";
import Heart from "../../atoms/Heart";
import { useState } from "react";
import Link from "next/link";

export default function CourseCardPopUp({ data }) {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div
        className="
            after:absolute after:top-1/2 after:right-[94%] after:box-border after:border-[11px] after:border-[white_transparent_transparent_white] after:origin-[0_0] after:-rotate-45 
            after:shadow-[-1px_-1px_0_.1px_#d1d7dc,-3px_-5px_4px_rgb(0_0_0/8%),-5px_-14px_12px_rgb(0_0_0/8%)]"
      ></div>
      <div className="w-[350px] p-6 shadow-[0_0_0_1px_#d1d7dc,0_2px_4px_rgb(0_0_0/8%),0_4px_12px_rgb(0_0_0/8%)]">
        <Link href={`/courses/${data.id}`}>
          <p className="text-xl font-bold font-sans cursor-pointer hover:text-[#401b9c] ">
            {data.title}
          </p>
        </Link>
        <div className="flex flex-row items-center jusify-start gap-3 mt-2">
          {data.bestseller && (
            <p className="bg-[#eceb98] text-[#3d3c0a] font-bold text-[13px] px-2 py-1">
              Bestseller
            </p>
          )}
          <p className="text-[#1e6055] text-[12px]">
            Updated <strong>{data.last_updated}</strong>
          </p>
        </div>
        <div className="flex flex-row mt-2 text-[#6A6F73] font-light text-xs font-sans gap-2">
          <p>
            {data.total_hours} Total hours <strong>·</strong>
          </p>
          <p>
            All Levels <strong>·</strong>
          </p>
          <p>Subtitles </p>
        </div>
        <p className="text-[#1C1D1F] mt-2 text-[14px]">{data.description}</p>
        <div className="flex flex-col justify-start text-[#1C1D1F] mt-2">
          {data.learning_points.map(
            (point, index) =>
              index < 3 && (
                <div
                  className="flex flex-row gap-6 items-center py-1"
                  key={index}
                >
                  <div className="grow-1">
                    <CheckIcon size={15} />
                  </div>
                  <p className="grow-4">{point}</p>
                </div>
              )
          )}
        </div>
        {/* <Heart isActive={liked} onClick={() => setLiked(!liked)} /> */}

        <div className="flex flex-row gap-4 items-center mt-4 ">
          <button className="bg-[#a021f5] font-bold text-white grow py-3 px-5 hover:bg-[#8710D8]">
            Add to cart
          </button>
          <div className="h-14 w-14 flex justify-center items-center border-black border rounded-[50%] hover:bg-gray-100 cursor-pointer">
              <Heart isActive={liked} onClick={() => setLiked(!liked)} className="w-8 h-8"  />
          </div>
        </div>
      </div>
    </>
  );
}
