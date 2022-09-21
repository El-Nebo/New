import SearchIcon from "../../../../public/icons/SearchIcon";
import { useRouter } from "next/router";
import { useRef } from "react";
import {AiOutlineSearch} from "react-icons/ai";

const SearchForm = () => {
  const router = useRouter();
  const searchRef = useRef();

  function formHandler(e){
    e.preventDefault();
    router.push({
      pathname: "/",
      query: { courses_filter: searchRef.current.value },
    });
  }

  return (
    <form className="grow" onSubmit={formHandler}>
      <div className="container flex mx-auto border rounded-[30px] h-12 border-black bg-[#f7f9fa]">
        <div className="flex ">
          <button type="submit" className="px-2 flex items-center justify-center">
            <AiOutlineSearch size={17} fill="#1c1d1f" />
          </button>
          <input
            type="text"
            ref={searchRef}
            className="focus:outline-none bg-inherit placeholder:text-gray-500 placeholder:text-sm"
            placeholder="Search for anything"
          />
        </div>
      </div>
    </form>
  );
};
export default SearchForm;
