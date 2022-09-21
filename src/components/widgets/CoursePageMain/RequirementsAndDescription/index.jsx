import {GoPrimitiveDot} from "react-icons/go";
import ShowMoreShowLess from "../../../atoms/ShowMoreShowLess";
import RenderHtml from "./RenderHtml";

export default function RequirementsAndDescription({ requirements, description }) {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl mb-4 font-bold text-[#1c1d1f]">Requirements</h2>
        <ul>
            {requirements?.map((req,idx)=><li key={idx} className="flex flex-row items-center gap-6"><div className="grow-1"><GoPrimitiveDot size={11}/></div><p className="grow-5">{req}</p></li>)}
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl mb-4 font-bold text-[#1c1d1f]">Description</h2>
        <ShowMoreShowLess lines={10}>
          <RenderHtml data={description}/>
        </ShowMoreShowLess>
      </div>
    </>
  );
}