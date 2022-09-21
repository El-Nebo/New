import RightComponentLi from "../../atoms/RightComponentLi";
import Image from "next/image";
import { FiPlayCircle } from "react-icons/fi";
import {
  AiOutlineFile,
  AiOutlineTrophy,
  AiFillPlayCircle,
} from "react-icons/ai";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { CgInfinity } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import styles from "./RightComponentStyles.module.css";
import { useEffect, useRef } from "react";

export default function CoursePageRightComponent({ course }) {
  const rightComponentRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let maxY =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight -
        500;
      let topMaxY = maxY-160;
      if (rightComponentRef.current) {
        if (window.scrollY <= 380) {
          rightComponentRef.current.style.position = "absolute";
          rightComponentRef.current.style.top = "105px";
          rightComponentRef.current.style.zIndex = "20";
          videoRef.current.style.display = "block";
        } else if (window.scrollY > 380 && window.scrollY <= maxY) {
          rightComponentRef.current.style.position = "fixed";
          rightComponentRef.current.style.top = "20px";
          rightComponentRef.current.style.zIndex = "20";
          videoRef.current.style.display = "none";
        } else if (window.scrollY > maxY) {
          rightComponentRef.current.style.position = "absolute";
          rightComponentRef.current.style.top = `${topMaxY}px`;
          rightComponentRef.current.style.zIndex = "2";
          videoRef.current.style.display = "block";
        }
      }
    });
  }, []);

  return (
    <div
      ref={rightComponentRef}
      className="absolute top-[105px] ml-[46rem] w-[340px] bg-white shadow-[0_2px_4px_rgb(0_0_0/8%),0_4px_12px_rgb(0_0_0/8%)] "
    >
      <div ref={videoRef} className="relative ">
        <Image
          src={"/photos/" + course.img}
          alt="course Image"
          width={600}
          height={320}
          objectFit="contain"
          objectPosition={"center center"}
        />
        <span className={styles.abbas}></span>
        <AiFillPlayCircle
          fill="white"
          size={100}
          className="absolute left-[115px] top-[43px]"
        />
      </div>
      <div className="flex flex-col  justify-center p-5 gap-1 border-b border-[#d1d7dc]">
        <span className="font-bold text-[35px]">E£{course.price}</span>
        <button className="bg-[#a021f5] font-bold text-white py-3 px-5 hover:bg-[#8710D8] w-full">
          Go to cart
        </button>
        <button className="bg-white border border-[#1c1d1f] font-bold py-3 px-5 hover:bg-gray-100 w-full">
          <span>Buy Now</span>
        </button>
        <p className="text-xs font-normal mt-3 self-center">
          30-Day Money-Back Guarantee
        </p>
        <div className="pt-3">
          <span className="font-bold ">This course includes:</span>
          <ul>
            <RightComponentLi>
              <FiPlayCircle size={17} />
              <span>{course.total_hours} on demand videos</span>
            </RightComponentLi>
            <RightComponentLi>
              <AiOutlineFile size={17} />
              <span>{course.articles_num} articles</span>
            </RightComponentLi>
            <RightComponentLi>
              <HiOutlineFolderDownload size={17} />
              <span>
                {course.downloadable_resources} downloadable resources
              </span>
            </RightComponentLi>
            <RightComponentLi>
              <CgInfinity size={17} />
              <span>Full lifetime access</span>
            </RightComponentLi>
            <RightComponentLi>
              <FaMobileAlt size={17} />
              <span>Access on mobile and TV</span>
            </RightComponentLi>
            <RightComponentLi>
              <AiOutlineTrophy size={17} />
              <span>Certificate of completion</span>
            </RightComponentLi>
          </ul>
        </div>
        <div className="flex flex-row justify-between">
          <button className="font-semibold underline">Share</button>
          <button className="font-semibold underline">Gift this course</button>
          <button className="font-semibold underline">Apply Coupon</button>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-bold text-lg">Training 5 or more people?</h3>
        <span className="text-sm">
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </span>
        <button className="bg-white border border-[#1c1d1f] font-bold py-2 px-5 hover:bg-gray-100 w-full">
          Try Udemy Business
        </button>
      </div>
    </div>
  );
}
