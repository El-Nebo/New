import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CoursePageTopContainer from "../../components/widgets/CoursePageTopContainer";
import { CoursesContext } from "../../contexts/coursesContext";
import Head from "next/head";
import CoursePageRightComponent from "../../components/widgets/CoursePageRightContainer";
import WhatYouWillLearn from "../../components/widgets/CoursePageMain/WhatYouWillLearn";
import CourseContent from "../../components/widgets/CoursePageMain/CourseContent";
import RequirementsAndDescription from "../../components/widgets/CoursePageMain/RequirementsAndDescription";
import Instrucors from "../../components/widgets/CoursePageMain/Instructors";
import StudentFeedBack from "../../components/widgets/CoursePageMain/StudentFeedBack";
import LoadingPage from "../../components/pages/LoadingPage";
import CourseReviews from "../../components/widgets/CoursePageMain/CourseReviews/indes";
import CoursePageFooter from "../../components/widgets/CoursePageFooter";
export default function Course() {
  const coursesData = useContext(CoursesContext).Data;
  const courseID = useRouter().query.id;
  const [course, setCourse] = useState({});

  useEffect(() => {
    const crs = coursesData?.courses?.find((course) => course.id == courseID);
    setCourse(crs);
  }, [coursesData]);
  if(!course) return <LoadingPage/>
  else return (
    <>
      <Head>
        {/* <title>{course.title} | Udemy</title> */}
      </Head>
      <CoursePageTopContainer course={course} />
      <div className="ml-56 max-w-2xl">
        <CoursePageRightComponent course={course} />
        <div className="pt-8">
          <WhatYouWillLearn learningPoints={course.learning_points} />
          <CourseContent
            content={course.content}
            sections={course.sections_num}
            lectures={course.lectures_num}
            hours={course.total_hours}
            minutes={course.total_minutes}
          />
          <RequirementsAndDescription
            requirements={course.requirements}
            description={course.description_section}
          />
          <Instrucors instructors={course.instructors} />
          <StudentFeedBack data={course.students_feedback} />
          <CourseReviews data={course.reviews} />
        </div>
      </div>
      <CoursePageFooter/>
    </>
  );
}
