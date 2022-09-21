import {AiOutlineSearch} from "react-icons/ai";

export default function ReviewsForm(){
    return (
      <div className="flex flex-row">
        <form className="grow h-[45px] flex flex-row items-center border-[2px] border-black">
          <input
            className="h-full grow"
            type="text"
            placeholder="Search reviews"
          ></input>
          <button className="h-[45px] w-[45px] bg-black text-white font-semibold text-[0.9rem]">
            <AiOutlineSearch size={27} className="m-auto" />
          </button>
        </form>
        <select className="ml-[10px] h-[45px] bg-white border-[2px] border-black font-semibold text-[0.9rem]">
          <option>All ratings</option>
          <option>1 Star</option>
          <option>2 Stars</option>
          <option>3 Stars</option>
          <option>4 Stars</option>
          <option>5 Stars</option>
        </select>
      </div>
    );
}