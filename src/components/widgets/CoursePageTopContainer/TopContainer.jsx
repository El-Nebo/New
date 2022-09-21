import Link from "next/link";
import StarBar from "../../atoms/StarBar";
import {BsFillPatchExclamationFill} from "react-icons/bs";
import {TbWorld} from "react-icons/tb";
import {MdClosedCaption} from "react-icons/Md";

export default function TopContainer({course}){
    return (
      <div className="flex flex-col py-8 gap-2">
        <div className="flex flex-row gap-3">
          {course?.category?.map((cat, index) => (
            <>
              <Link href="/">
                <p className="text-[#cec0fc] font-bold cursor-pointer">{cat}</p>
              </Link>
              {index !== course?.category?.length - 1 && (
                <p className="text-white font-bold">{">"}</p>
              )}
            </>
          ))}
        </div>
        <h1 className="text-[1.9rem] text-white font-bold mb-2">
          {course.title}
        </h1>
        <h2 className="text-[1.1rem] text-white mb-2">{course.description}</h2>
        <div className="flex flex-ro items-center gap-2">
          <div className="flex flex-row items-center ">
            {course.bestseller && (
              <p className="bg-[#eceb98] text-[#3d3c0a] font-bold text-[13px] px-2 py-1 mr-3">
                Bestseller
              </p>
            )}
            <span className="text-[#F3Ca8c] font-bold text-sm pr-1">
              {course.stars}
            </span>
            <StarBar count={Math.round(course.stars ?? 0)} color="#F3Ca8c" />
          </div>
          <Link href="/">
            <p className="text-[#cec0fc] underline cursor-pointer text-sm">{`(${course.ratings_count} ratings)`}</p>
          </Link>
          <p className="text-white font-sans text-sm">
            {course.students} students
          </p>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-white">Created by &nbsp; </p>
          {course?.instructors?.map((inst, idx) => (
            <>
              <Link href="/">
                <span className="text-[#cec0fc] underline cursor-pointer">
                  {inst.name}
                </span>
              </Link>
              {idx !== course?.instructors?.length - 1 && (
                <span className="text-white font-bold">,&nbsp;</span>
              )}
            </>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2 text-white text-sm">
          <BsFillPatchExclamationFill fill="white" />
          <p className="mr-3">Last updated {course.last_updated}</p>
          <TbWorld size={17} />
          <p className="mr-3">{course.course_language}</p>
          <MdClosedCaption size={20} />
          <p>{course.caption_language}</p>
        </div>
      </div>
    ); 
}