import React from "react";

type IconArgs = {
  buttonClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  label?: string;
  isActive?: boolean;
  handleIconActive?: () => void;
  handleCityClick?: () => void;
};

  //? Needed to able to give each Icon the same style.
const Icon: React.FC<IconArgs> = ({buttonClassName, iconClassName,
  labelClassName, icon, label, isActive, handleIconActive, handleCityClick }) => {

  // Necessary to be able to set classNames to the element itself
  const iconWithClass = React.cloneElement(icon, {
  className: `${iconClassName || "w-8 h-8"} text-current`
});

  return (
    //Every Icon should be a button
    <button
      className={`flex ${buttonClassName || "flex-col"} items-center cursor-pointer
      transition-colors duration-300 hover:text-violet-400
   active:text-violet-800 
   ${isActive ? 'text-violet-400' : 'text-black dark:text-white'}`}
   onClick={() =>  {
    handleIconActive?.();
    handleCityClick?.();
   }}
    >
     
        {iconWithClass}
       
       {/* Only render this section if label is given, so labeless icon can also work */}
      {label && (
        <span lang="en"
          className={`${labelClassName || "text-sm"}
          text-current font-bold
      transition-colors duration-300 md:text-nowrap`}
        >
          {label}
        </span>
      )}
    </button>
  );
};

export default Icon;
