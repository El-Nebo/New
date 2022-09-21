import Link from "next/link";
import Image from "next/image";
import InstructorList from "../../../atoms/InstructorList";
import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";
import {FaAward} from "react-icons/fa";
import {HiUsers} from "react-icons/hi";
import Star from "../../../atoms/Star";
import RenderHtml from "../RequirementsAndDescription/RenderHtml";
import ShowMoreShowLess from "../../../atoms/ShowMoreShowLess";

export default function Instrucors({instructors}){
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Instructors</h2>
        {instructors?.map((instructor) => (
          <div key={instructor.nam} className="mb-4">
            <Link href="/">
              <p className="text-xl font-bold text-[#5624d0] cursor-pointer underline ">{instructor.name}</p>
            </Link>
            <p className="text-[#6a6f73] ">{instructor.headline}</p>
            <div className="flex flex-row items-center gap-5 mt-2 mb-4">
                <div className="rounded-[50%] bg-black overflow-hidden h-[112px] w-[112px]">
                    <Image src={"/photos/"+instructor.img} width={112} height={112} alt={instructor.name} objectFit="contain"/> 
                </div>
                <div className="flex flex-col items-center">
                    <ul>
                        <InstructorList>
                        <AiFillStar size={17} />
                        <span>{instructor.total_hours} Instructor Rating  </span>
                        </InstructorList>
                        <InstructorList>
                        <FaAward size={17} />
                        <span>{instructor.total_reviews_count} Reviews</span>
                        </InstructorList>
                        <InstructorList>
                        <HiUsers size={17} />
                        <span>
                            {instructor.total_students} Students
                        </span>
                        </InstructorList>
                        <InstructorList>
                        <AiFillPlayCircle  size={17} />
                        <span>{instructor.courses_count} Course</span>
                        </InstructorList>
                    </ul>
                </div>
            </div>
            <ShowMoreShowLess lines={3}>
              <RenderHtml data={instructor.about}/>
            </ShowMoreShowLess>
          </div>
        ))}
      </div>
    );
}