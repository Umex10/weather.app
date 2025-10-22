import { useState } from "react";
import ForecastCard from "./ForecastCard";
import { forecastTodayData } from "../../utils/forecastDateUtils/forecastTodayData";
import { useForecastContext } from "../../context/hooks/useForecastContext";
import { forecastTomorrowData } from "../../utils/forecastDateUtils/forecastTomorrowData";

const SeveralForecasts = () => {
  const [activeTab, setActiveTab] = useState("Today");

  const tabs = ["Today", "Tomorrow"];
  const { forecast } = useForecastContext();
  if (!forecast) return;

  const forecastToday = forecastTodayData(forecast);
  const forecastTomorrow = forecastTomorrowData(forecast);

  if (typeof forecastToday === "string" || typeof forecastTomorrow === "string")
    return forecastToday;

  return (
    <div
      className="w-full h-full flex flex-col gap-2
     items-start text-white min-w-[300px] max-w-md
      bg-transparent md:border border-gray-400/50 py-4 md:p-4 rounded-2xl"
    >
      <div className="flex flex-row items-start gap-4 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 border-b border-b-transparent text-gray-500/90
          hover:text-violet-500 hover:border-b-violet-500 transition-all 
          duration-300 ease-in-out
          ${
            activeTab === tab
              ? "text-violet-500 border-b-violet-500"
              : "text-gray-500/90 hover:text-violet-500 hover:border-b-violet-500"
          }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        className="flex flex-row h-full
      md:flex-col items-center md:items-start gap-3 md:pt-4
      overflow-x-scroll md:overflow-x-auto w-full"
      >
        {forecastToday &&
          activeTab === "Today" &&
          forecastToday.map((forecastItem, i) => (
            <ForecastCard
              key={i}
              className={
                i === forecastToday.length - 1 && i === 1
                  ? "md:border-none"
                  : ""
              }
              forecastItem={forecastItem}
            />
          ))}

        {forecastTomorrow &&
          activeTab === "Tomorrow" &&
          forecastTomorrow.map((forecastItem, i) => (
            <ForecastCard
              key={i}
              className={`${
                i === forecastTomorrow.length - 1 ? "md:border-none" : ""
              }
            ${forecastTomorrow.length >= 6 ? "md:h-full" : "md:h-auto"} `}
              forecastItem={forecastItem}
            />
          ))}
      </div>
    </div>
  );
};

export default SeveralForecasts;
