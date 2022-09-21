import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Truncate from "react-truncate";
import styles from "./ShowMoreShowLessStyles.module.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function ShowMoreShowLess({ children, lines = 3 }) {
  const [state, setState] = useState({
    expanded: false,
    truncated: false,
  });

  function handleTruncate(truncated) {
    console.log("fdfdf");
    if (state.truncated !== truncated) {
      setState({
        truncated: true
      });
    }
  }

  function toggleLines(event) {
    event.preventDefault();

    setState({
      expanded: !state.expanded,
    });
  }
  return (
    <>
      <div className="relative">
        <Truncate
          lines={!state.expanded && lines}
          ellipsis={
            <>
              <span>{"..."}</span>
              <button
                href="#"
                onClick={toggleLines}
                className="text-[#5624d0] text-sm font-bold hover:text-[#401b9c] flex flex-row items-center"
              >
                <p>Show more &nbsp;</p> <IoIosArrowDown />
              </button>
            </>
          }
          // onTruncate={handleTruncate}
        >
          {children}
        </Truncate>
        {!(!state.truncated && state.expanded) && (
          <span className={styles.whitegradient}></span>
        )}
      </div>
      {!state.truncated && state.expanded && (
        <button
          href="#"
          onClick={toggleLines}
          className="flex text-[#5624d0] text-sm font-bold hover:text-[#401b9c]"
        >
          <p>Show less &nbsp;</p> <IoIosArrowUp />
        </button>
      )}
    </>
  );
}
