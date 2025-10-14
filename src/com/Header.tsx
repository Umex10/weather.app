import { CiCloudMoon } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";
import Icons from "./Icons";
import { useSearch } from "../context/SearchContext";
import Input from "./Input";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  function toggleHamburger() {
    setHamburger((value) => !value);
  }

  const {setInput} = useSearch();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  return (
    <div className="fixed top-0 left-0 w-full md:w-auto md:h-full p-6">
      <div
        className="p-4 flex flex-row md:flex-col items-center justify-between md:justify-start md:gap-12
         border border-gray-400/50 h-full rounded-2xl bg-transparent md:bg-gray-900"
      >
        <CiCloudMoon
          className="w-8 h-8 text-white bg-blue-400 rounded-xl 
        p-1 transition-transform duration-300 hover:scale-110 hover:bg-violet-500"
        />

        <Input className="flex items-center justify-between relative md:hidden" handleInput={handleInput} ></Input>

        <GiHamburgerMenu
          onClick={toggleHamburger}
          className="w-8 h-8 md:hidden text-white  
        p-1 transition-transform duration-300 hover:scale-110 hover:bg-violet-500"
        ></GiHamburgerMenu>

        {hamburger && (
          <Icons
            className="fixed inset-0 pt-10 flex flex-col items-center gap-6 bg-custom-gradient-dark"
            toggleHamburger={toggleHamburger} cross={true}
          ></Icons>
        )}

        <Icons
          className="hidden md:flex flex-col items-center gap-6"
          cross={false}
        ></Icons>
      </div>
    </div>
  );
};

export default Header;
