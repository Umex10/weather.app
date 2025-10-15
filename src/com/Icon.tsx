import React from "react";

type IconArgs = {
  buttonClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  label?: string;
};

const Icon: React.FC<IconArgs> = ({buttonClassName, iconClassName,
  labelClassName, icon, label }) => {

  const iconWithClass = React.cloneElement(icon, {
  className: `${iconClassName || "w-8 h-8"} text-current`
});

  return (
    <button
      className={`flex ${buttonClassName || "flex-col"} items-center cursor-pointer
      transition-colors duration-300 hover:text-violet-400
   active:text-violet-800 text-black dark:text-white `}
      
    >
     
        {iconWithClass}
       
      {label && (
        <span
          className={`${labelClassName || "text-sm"} text-current font-bold 
      transition-colors duration-300`}
        >
          {label}
        </span>
      )}
    </button>
  );
};

export default Icon;
