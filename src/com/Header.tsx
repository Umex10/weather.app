import { CiCloudMoon, CiCloudOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";
import Input from "./Input";
import Icon from "./Icon";
import { IoMdClose } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";

//? This header will be a normal header for mobile, but on deskto it should display
//? as a side bar

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [path, setNewPath] = useState<string  | null>("/weather");

  /* This will toggle the boolean value, to keep track, if the hamburger menu is currently
     displayed */
  function toggleHamburger() {
    setHamburger((value) => !value);
  }

  // The argument will be a <Link> path needed for Routing
  // In addition we are able to set a different color on a <Link> element if it was clicked. 
  function handleIconActive(newPath: string) {
    setNewPath(newPath);
  }

  const { handleInput, handleClickIcon, handleKeyDown } = useEvents();

  return (
    <header className="absolute top-0 left-0 w-full md:w-auto md:h-3/7 p-6">
      {/* Styles the arrangment of the items */}
      <div
        className="p-4 flex flex-row md:flex-col items-center justify-between 
        gap-2 md:justify-start md:gap-12 border border-gray-400/50 h-full rounded-2xl 
        bg-transparent md:bg-gray-900"
      >
        <nav className="flex flex-col items-center gap-6">
          {/* Logo for deskto as well as mobile */}
        
            <Icon
              icon={<CiCloudMoon />}
              buttonClassName="bg-green-500 hover:bg-violet-500
         transition-colors duration-300 rounded-xl p-1 md:p-2 flex-shrink-0"
              iconClassName=""
            ></Icon>
          {/*  if hamburger true (mobile) = The icons will take the whole screen
               if hamburger false (deskto) = The icons will display vertically on the left side  */}
          <div
            className={`${
              hamburger &&
              "fixed md:static inset-0 pt-10 flex flex-col items-center gap-6 bg-custom-gradient-dark z-50"
            } 
             ${!hamburger && "hidden md:flex flex-col items-center gap-6"}`}
          >
            {/* Close "X" icon */}
            <Icon
              icon={<IoMdClose onClick={toggleHamburger} />}
              buttonClassName="md:hidden flex-col"
              label="Close"
            ></Icon>

            {/* Weather Icon  */}
            <Link to="/weather">
              <Icon icon={<CiCloudOn />} label="Weather"
              isActive={path === "/weather"}
              handleIconActive={() => handleIconActive("/weather")}></Icon>
            </Link>

            {/*  Cities Icon */}
            <Link to="/cities">
              <Icon icon={<FaCity />} label="Cities"
              isActive={path === "/cities"}
              handleIconActive={() => handleIconActive("/cities")}></Icon>
            </Link>

            {/* Settings Icon  */}
            <Link to="/settings">
              <Icon
                icon={<MdOutlineSettingsInputComposite />}
                label="Settings"
                 isActive={path === "/settings"}
                handleIconActive={() => handleIconActive("/settings")}
              ></Icon>
            </Link>
          </div>
        </nav>

        {/* Com for mobile only */}
        <Input
          className="flex items-center relative md:hidden"
          handleInput={handleInput}
          handleClickIcon={handleClickIcon}
          handleKeyDown={handleKeyDown}
        ></Input>

        {/* Hamburger Menu for mobile only */}
        <Icon
          icon={<GiHamburgerMenu onClick={toggleHamburger} />}
          buttonClassName="md:hidden p-1 flex-shrink-0"
          iconClassName=""
        ></Icon>
      </div>
    </header>
  );
};

export default Header;
