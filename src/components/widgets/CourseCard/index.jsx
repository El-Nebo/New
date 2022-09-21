import Image from "next/image";
import StarBar from "../../atoms/StarBar";
import Link from "next/link";
import CourseCardPopUp from "./CourseCardPopUp";

const CourseCard = ({data}) =>{ 
  //img, title, author, countStars, countRatings, price, oldPrice, isBestSeller;
  function getAuthorsString(instructors) {
    let authors = "";
    instructors.forEach((instructor,index)=> authors += instructor.name + (index === instructors.length -1?"":","));
    return authors;
  }

  const img = "/photos/" + data.img;
  const title = data.title;
  const author = getAuthorsString(data.instructors);
  const countStars = data.stars;
  const countRatings = data.ratings_count;
  const price = data.price;
  const oldPrice = data.old_price;
  const isBestSeller = data.bestseller;


  return (
    <div className="relative flex flex-row group">
      <a className="cursor-pointer ">
        <Link href={`/courses/${data.id}`}>
          <div className="inline-flex flex-col w-56 group relative">
            <div className="group-hover:brightness-75">
              <Image
                src={img}
                alt="python photo"
                objectFit="contain"
                width="240"
                height="135"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-base font-sans mt-1 mb-[2px]">
                {title}
              </p>
              <p className="text-[#6a6f73] text-xs">{author}</p>
              <div className="flex flex-ro items-center">
                <span className="text-[#b4690e] font-bold text-sm pr-1">
                  {countStars}
                </span>
                <StarBar count={Math.round(countStars)} />
                <span className="text-[#6a6f73] text-xs pl-2">
                  ({countRatings})
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <span className="font-bold text">E£{price}</span>
                <span className="text-[#6a6f73] text-xs line-through">
                  E£{oldPrice}
                </span>
              </div>
              {isBestSeller && (
                <div className="flex flex-row mt-2">
                  <p className="bg-[#eceb98] text-[#3d3c0a] font-bold text-[13px] px-2 py-1">
                    Bestseller
                  </p>
                </div>
              )}
            </div>
          </div>
        </Link>
      </a>
      <div className="bg-white absolute left-[100%]  z-10 invisible group-hover:visible">
        <div className="ml-4">
          <CourseCardPopUp data={data} />
        </div>
      </div>
    </div>
  );  
}
export default CourseCard;