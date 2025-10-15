import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { useSearch } from "../context/SearchContext";

type InputArgs = {
  className: string; 
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickIcon: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({ className, handleInput, handleClickIcon, handleKeyDown }: InputArgs) => {
  const { input } = useSearch();

  return (
    <div className={className}>
      <FaSearchLocation
        className="absolute left-2 top-1/2 
              transform -translate-y-1/2 text-gray-400 my-auto"
              onClick={handleClickIcon}
      ></FaSearchLocation>

      <input
        type="text"
        placeholder="Search city"
        className="border border-slate-500 py-1 
        pl-8 rounded-2xl md:py-2 bg-gray-900 
        text-white  min-w-[130px] max-w-[400px] 
        flex-shrink-0 w-full"

        value={input}
        onChange={(e) => handleInput(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      ></input>
    </div>
  );
};

export default Input;
