import CourseSection from "../../widgets/CourseSection";
import Layout from "../../widgets/Layout";
import Image from "next/image";
import HomePagePhoto from "../../../../public/photos/Home-Page-Photo.png";
import CourseSectionTabs from "../../widgets/CourseSectionTabs";;

const HomePage = () => {
  return (
    <>
      <section>
        <div className="flex flex-row justify-center mb-10">
          <Image src={HomePagePhoto} alt={"Home Page"} />
          <div className="absolute left-40 top-36 max-w-md p-6 bg-white shadow-[0_2px_4px_rgb(0_0_0/8%),0_4px_12px_rgb(0_0_0/8%);]">
            <h1 className="text-3xl mb-3 font-bold font-[Georgia]">The skills for now — now on sale</h1>
            <p className="font-medium">
              Chart your path to success. Log in for limited-time savings on the latest topics.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[88%] px-6 mx-auto">
            <h1 className="text-3xl mb-3 font-bold font-[Georgia]">A broad selection of courses</h1>
            <p className="text-xl mt-2">Choose from 204,000 online video courses with new additions published every month</p>
        </div>
        <div className="mx-auto px-6 w-[88%]">
          <CourseSectionTabs/>
          <CourseSection />
        </div>
      </section>
    </>
  );
};
export default HomePage;
