import React from "react";

type IconArgs = {
  className ?: string;
    icon: React.ReactElement;
  label: string;
};

const Icon: React.FC<IconArgs> = ({className, icon, label, }) => {
  return (
    <div className={`${className} flex flex-col items-center group cursor-pointer`}>
      <div className="w-8 h-8 text-white transition-colors duration-300 group-hover:text-violet-400">
          {icon}
      </div>
      <p className="text-white font-bold text-sm transition-colors duration-300 group-hover:text-violet-400">
        {label}
      </p>
    </div>
  );
};

export default Icon;
