import StarBar from "../StarBar";
export default function RatingBar({percentage}){
    return(
        <div className="flex flex-row gap-2 items-center">
            <div className="h-[12px] grow flex">
            <div className="bg-[rgb(95,95,95)]" style={{width: `${Math.round(percentage)}%`}}></div>
            <div className="bg-[rgb(224,224,222)]" style={{width: `${100-Math.round(percentage) }%`}}></div>
            </div>
            <StarBar count={5} color="rgb(255,188,11)"/>
            <u className="text-[#5624d0]">{percentage}</u>
        </div>
    )
}