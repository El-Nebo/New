import { AiOutlineCheck } from "react-icons/ai";

export default function WhatYouWillLearn({ learningPoints }) {
  return (
    <div className="border border-[#d1d7dc] pt-6 pb-4 mb-8">
      <h2 className="font-bold text-2xl font-sans mx-6 mb-4">
        What you'll learn
      </h2>
      <ul className="mx-6 flex flex-row flex-wrap items-start justify-between">
        {learningPoints?.map((point) => (
          <li key={point} className="flex flex-row gap-5 items-start py-1 w-[300px]">
            <div className="grow-1"><AiOutlineCheck size={"15px"} /></div>
            <p className="grow-4 text-sm">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
