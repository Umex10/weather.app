import React from 'react';

type OneConditionArgs = {
  name: string;
  value: string;
  symbol: React.ReactElement<React.SVGProps<SVGSVGElement>>;
};

//? Will return an alone standing "one condition"

const OneCondition = ({ name, value, symbol }: OneConditionArgs) => {
  const symbolWithClass = React.cloneElement(symbol, {
    className: 'w-5 h-5 md:w-6 md:h-6 flex-shrink-0',
  });

  return (
    // one condition border
    <div className="w-full border border-gray-400/50 rounded-xl text-white py-4 px-2 md:px-3 min-w-[90px]">
      { /* Main style div */}
      <div className="flex flex-row items-center"> 
        {symbolWithClass}
        {/* Text div */}
        <div className="flex flex-col ml-2 md:ml-3 justify-center gap-0.5">
          <p className="text-[10px] md:text-sm">{name}</p>
          <p className="font-extrabold text-[16px] md:text-xl leading-none">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default OneCondition;