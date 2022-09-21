import StickyHeader from "./StickyHeader";
import TopContainer from "./TopContainer";
export default function CoursePageTopContainer({ course }) {
  return (
    <>
      <StickyHeader
        title={course.title}
        countStars={course.stars}
        ratingCount={course.ratings_count}
        students={course.students}
      />
      <div className="bg-[#1c1d1f]">
        <div className="ml-56 max-w-2xl">
          <TopContainer course={course} />
        </div>
      </div>
    </>
  );
}
