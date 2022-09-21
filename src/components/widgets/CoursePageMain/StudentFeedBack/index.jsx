import StarBar from "../../../atoms/StarBar";
import LoadingPage from "../../../pages/LoadingPage";
import RatingBar from "../../../atoms/RatingBar";
export default function StudentFeedBack({data}){
    if(data) return (
      <div className="mt-8">
        <h2 className="font-bold text-[#1c1d1f] text-2xl">Students FeedBack</h2>
        <div className="flex flex-row gap-7">
          <div className="flex flex-col">
            <span className="text-[80px] font-bold text-[#b4690e]">{data.avg_stars}</span>
            <StarBar count={Math.round(data.avg_stars)} color="rgb(255,188,11)" size={20} className="justify-between"/>
            <span className="text-[#b4690e] font-bold mt-1">Course Rating</span>
          </div>
          <div className="flex flex-col w-full justify-between">
            <RatingBar percentage={data.five_stars_percentage} />
            <RatingBar percentage={data.four_stars_percentage} />
            <RatingBar percentage={data.three_stars_percentage} />
            <RatingBar percentage={data.two_stars_percentage} />
            <RatingBar percentage={data.one_star_percentage} />
          </div>
        </div>
      </div>
    );
    else return <LoadingPage/>
}