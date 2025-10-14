import Icon from "./Icon";
import { IoMdClose } from "react-icons/io";
import { CiCloudOn } from "react-icons/ci";
import { FaCity } from "react-icons/fa";
import { MdOutlineSettingsInputComposite } from "react-icons/md";

type IconsArgs = {
  className: string;
  toggleHamburger?: () => void;
  cross?: boolean;
};

const Icons = ({ className, toggleHamburger, cross }: IconsArgs) => {
  return (
    <div className={className}>
      <Icon  className={`${cross ? '' : 'hidden'}`}
        icon={
          <IoMdClose
            onClick={toggleHamburger}
            className="w-8 h-8 transition-colors duration-300 group-hover:text-violet-400"
          />
        }
        label="Close"
        ></Icon>

      <Icon
        icon={
          <CiCloudOn className="w-8 h-8 transition-colors duration-300 group-hover:text-violet-400" />
        }
        label="Weather"
      ></Icon>
      <Icon
        icon={
          <FaCity className="w-8 h-8 transition-colors duration-300 group-hover:text-violet-400" />
        }
        label="Cities"
      ></Icon>
      <Icon
        icon={
          <MdOutlineSettingsInputComposite className="w-8 h-8 transition-colors duration-300 group-hover:text-violet-400" />
        }
        label="Settings"
      ></Icon>
    </div>
  );
};

export default Icons;
