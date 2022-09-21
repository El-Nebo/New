import CourseCard from "../CourseCard";
import { CoursesContext } from "../../../contexts/coursesContext";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CourseSection = () => {
  const coursesData = useContext(CoursesContext).Data;
  const router = useRouter();
  const searchValue = router.query.courses_filter;
  const [courses, setCourses] = useState();

  useEffect(() => {
    if (coursesData.courses) {
      let coursesTemp = coursesData.courses.filter((course) =>
        course.title.toLowerCase().includes(searchValue??"")
      );
      setCourses(coursesTemp);
      
    }
  }, [searchValue, coursesData]);

  return (
      <div className="border border-[#d1d7dc] p-8">
        <div className="mb-8">
          <p className="font-bold text-2xl mb-3  text-[#1c1d1f]">{coursesData.title}</p>
          <p className="max-w-[52rem] mb-4 text-[#1c1d1f] font-sans leading-[1.4]">{coursesData.description}</p>
          <a className="inline-flex border border-[#1c1d1f] px-3 h-10 items-center cursor-pointer hover:bg-slate-200">
            <span className="font-[#1c1d1f] font-bold text-sm">
              Explore {coursesData.topic}
            </span>
          </a>
        </div>
        <div className="flex flex-wrap flex-row gap-5">
          {courses?.map(course=>(<CourseCard key={course.id} data={course}/>))}
        </div>
      </div>
  );
}
export default CourseSection;