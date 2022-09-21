import { IoIosArrowUp } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import styles from "./DropDownStyle.module.css";
export default function DropDown({ point, onToggle, state }) {
  function buttonListner(){
    onToggle();
  }
  return (
    <div>
      <button onClick={buttonListner} className="w-full">
        <div className="bg-[#f7f9fa] py-4 px-6 flex flex-row border border-[#d1d7dc] items-center">
          {state === "Expand" ? (
            <div className={styles.arrowup}>
              <IoIosArrowUp />
            </div>
          ) : (
            <div className={styles.arrowdown}>
              <IoIosArrowUp />
            </div>
          )}
          <p className="ml-4 font-bold">{point.title}</p>
          <div className="ml-auto text-[#1c1d1f] text-sm">
            {point.points.length} lectures
          </div>
        </div>
      </button>
      {state === "Expand" && (
        <div className="py-4 px-6 flex flex-col border border-[#d1d7dc] gap-3">
          {point.points.map((pnt) => (
            <div key={pnt} className="flex flex-row items-center">
              <AiFillPlayCircle />
              <p className="ml-5 text-[#1c1d1f]">{pnt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
