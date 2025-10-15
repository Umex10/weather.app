import { CiCloudMoon, CiCloudOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

import { useContext, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { CityContext } from "./CityContext";
import Input from "./Input";
import Icon from "./Icon";
import { IoMdClose } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { MdOutlineSettingsInputComposite } from "react-icons/md";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  function toggleHamburger() {
    setHamburger((value) => !value);
  }

  const { input, setInput } = useSearch();
  const { setCity } = useContext(CityContext);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  function handleClickIcon() {
    if (input.trim() === "") {
      console.log("The input field is empty");
      return;
    } else {
      console.log(input);
    }
    setCity(input);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      console.log(input);
      setCity(input);
      setInput("");
    }
  }

  return (
    <header className="absolute top-0 left-0 w-full md:w-auto md:h-full p-6">
      <div
        className="p-4 flex flex-row md:flex-col items-center justify-between 
        gap-2 md:justify-start md:gap-12 border border-gray-400/50 h-full rounded-2xl 
        bg-transparent md:bg-gray-900"
      >
           <Icon 
        icon={<CiCloudMoon/>}
        buttonClassName="bg-green-500 hover:bg-violet-500
         transition-colors duration-300 rounded-xl p-1 md:p-2 flex-shrink-0"
        iconClassName="">
        </Icon>

        <Input
          className="flex items-center relative md:hidden"
          handleInput={handleInput}
          handleClickIcon={handleClickIcon}
          handleKeyDown={handleKeyDown}
        ></Input>

        <Icon 
        icon={<GiHamburgerMenu onClick={toggleHamburger}/>}
        buttonClassName="md:hidden p-1 flex-shrink-0"
        iconClassName="">
        </Icon>
       
       

        <div
          className={`${
            hamburger &&
            "fixed md:static inset-0 pt-10 flex flex-col items-center gap-6 bg-custom-gradient-dark z-50"
          } 
             ${!hamburger && "hidden md:flex flex-col items-center gap-6"}`}
        >
          <Icon
            icon={<IoMdClose onClick={toggleHamburger} />}
            buttonClassName="md:hidden flex-col"
            label="Close"
          ></Icon>

          <Icon icon={<CiCloudOn />} label="Weather"></Icon>
          <Icon icon={<FaCity />} label="Cities"></Icon>
          <Icon
            icon={<MdOutlineSettingsInputComposite />}
            label="Settings"
          ></Icon>
        </div>
      </div>
    </header>
  );
};

export default Header;
