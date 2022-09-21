import CourseSectionTab from "../../atoms/CourseSectionTab";

const CourseSectionTabs = () =>{
    return (
      <div className="flex flex-row text-">
        <CourseSectionTab>Python</CourseSectionTab>
        <CourseSectionTab>Excel</CourseSectionTab>
        <CourseSectionTab>Web Development</CourseSectionTab>
        <CourseSectionTab>JavaScript</CourseSectionTab>
        <CourseSectionTab>Data Science</CourseSectionTab>
        <CourseSectionTab>AWS Certificati</CourseSectionTab>
        <CourseSectionTab>Drawing</CourseSectionTab>
      </div>
    );
}
export default CourseSectionTabs;