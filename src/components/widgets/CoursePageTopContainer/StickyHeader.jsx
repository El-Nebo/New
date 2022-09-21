import Link from "next/link";
import Star from "../../atoms/Star"
export default function StickyHeader({ title, countStars,ratingCount,students }) {
  return (
    <div className="fixed top-0 z-10 w-full">
      <div className="py-4 px-6 bg-[#1c1d1f] h-[73px] shadow-[0_2px_4px_rgb(0_0_0/8%),0_4px_12px_rgb(0_0_0/16%)]">
        <h1 className="text-white font-bold">{title}</h1>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-[#F3Ca8c] font-bold text-sm ">{countStars}</p>
          <Star isOn={true} color={"#F3Ca8c"} />
          <Link href="/">
            <p className="text-[#cec0fc] underline cursor-pointer">{`(${ratingCount} ratings)`}</p>
          </Link>
          <p className="text-white font-sans text-sm">{students} students</p>
        </div>
      </div>
    </div>
  );
} 