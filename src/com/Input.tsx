import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { useSearch } from "../context/SearchContext";

type InputArgs = {
  className: string; 
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ className, handleInput }: InputArgs) => {
  const { input } = useSearch();

  return (
    <div className={className}>
      <FaSearchLocation
        className="absolute left-2 top-1/2 
              transform -translate-y-1/2 text-gray-400 my-auto"
      ></FaSearchLocation>

      <input
        type="text"
        placeholder="Search city"
        className="border border-slate-500
                        py-1 pl-8 rounded-2xl
                        md:py-2 w-full min-w-[130px] 
                        max-w-[220px] md:w-[400px] 
                        md:bg-gray-900"
        value={input}
        onChange={(e) => handleInput(e)}
      ></input>
    </div>
  );
};

export default Input;
