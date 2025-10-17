import { FaSearchLocation } from "react-icons/fa";
import { useSearchContext } from "../context/hooks/useSearchContext";
import type { InputArgs } from "../types/input";

// This will hold only the arg className
type InputArgsLocal = {
  className: string; 
};

type CombinedArgs = InputArgsLocal & InputArgs;

//? Since we are using to differnet inputs, we are creating a com of it
const Input = ({ className, handleInput, handleClickIcon, handleKeyDown }: CombinedArgs) => {
  // Needed so we can update the value of the input element manually.
  const { input } = useSearchContext();

  return (
    <div className={className}>
      {/*  The search icon */}
      <FaSearchLocation
        className="absolute left-2 top-1/2 
              transform -translate-y-1/2 text-gray-400 my-auto"
              onClick={handleClickIcon}
      ></FaSearchLocation>

      {/*  The input element */}
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
