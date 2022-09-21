import { useState, useReducer } from "react";
import ShowMoreShowLess from "../../../atoms/ShowMoreShowLess";
import DropDown from "./dropdown";

const initialState = Array(50).fill("Collapse");
function toggleAll(state, { type, index, setExpandCollapseState }) {
  switch (type) {
    case "Expand-all":
      for (let i = 0; i < 50; i++) state[i] = "Expand";
      setExpandCollapseState("Collapse");
      return [...state];
    case "Collapse-all":
      for (let i = 0; i < 50; i++) state[i] = "Collapse";
      setExpandCollapseState("Expand");
      return [...state];
    case "toggle":
      if (state[index] == "Expand") state[index] = "Collapse";
      else state[index] = "Expand";
      return [...state];
  }
}

export default function CourseContent({
  content,
  sections,
  lectures,
  hours,
  minutes,
}) {
  let n = content?.length;
  const [expandCollapseState, setExpandCollapseState] = useState("Expand");
  const [state, dispatch] = useReducer(toggleAll, initialState);
  const [showMore,setShowMore] = useState(false);

  function toggleState(x) {
    setExpandCollapseState(x);
  }

  const contentRow = content?.map((point, index) => (
    <DropDown
      key={index}
      point={point}
      state={state[index]}
      onToggle={() =>
        dispatch({
          type: "toggle",
          index: index,
          setExpandCollapseState: toggleState,
        })
      }
    />
  ));

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold font-sans mb-4">Course content</h2>
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm my-2 text-[#1c1d1f]">
          {sections} sections • {lectures} lectures • {hours}h {minutes}m total
          length
        </p>
        <button
          onClick={() =>
            dispatch({
              type: `${expandCollapseState}-all`,
              setExpandCollapseState: toggleState,
            })
          }
          className="text-[#5624d0] text-sm font-bold hover:text-[#401b9c]"
        >
          {expandCollapseState} all sections
        </button>
      </div>
      <div className="flex flex-col">
        {showMore ? (
          contentRow
        ) : (
          <>
            <>{contentRow?.slice(0, 5)}</>{" "}
            <button
              onClick={() => setShowMore(true)}
              className="bg-transparent px-3 mt-4 h-10 flex text-sm border border-[#1c1d1f] items-center justify-center font-bold"
            >
              {contentRow?.length - 5} more sections
            </button>
          </>
        )}
      </div>
    </div>
  );
}
