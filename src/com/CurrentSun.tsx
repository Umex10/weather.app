import CardFirstStyle from "../styles/CardFirstStyle";
import { BsSunset, BsSunrise } from "react-icons/bs";
import Icon from "./Icon";
import { useWeatherContext } from "../context/hooks/useWeatherContext";
import { convertStamp } from "../utils/convertStamp";
import { MdAccessTime } from "react-icons/md";
import { GiSunrise } from "react-icons/gi";

const CurrentSun = () => {
  const { weather } = useWeatherContext();

  if (!weather) return;

  const sunrise = weather.sys.sunrise;
  const sunset = weather.sys.sunset;

  const sunriseLocal = convertStamp(sunrise);
  const sunsetLocal = convertStamp(sunset);

  // day length in seconds -> formatted "Hh Mm"
  const dayLengthSeconds = sunset - sunrise;
  const formatDuration = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    return `${h}h ${m}m`;
  };
  const dayLength = formatDuration(dayLengthSeconds);

  // golden hour: first hour after sunrise, last hour before sunset
  const goldenMorningStart = convertStamp(sunrise);
  const goldenMorningEnd = convertStamp(sunrise + 3600);
  const goldenEveningStart = convertStamp(sunset - 3600);
  const goldenEveningEnd = convertStamp(sunset);

  return (
    <CardFirstStyle>
      <section
        className="w-full h-full flex flex-row items-center justify-center gap-6 p-4"
        aria-label="Sunrise and sunset information"
      >
        {/* Left block: golden hours + day length */}
        <div className="w-full  flex flex-col  items-center gap-4">
          <div className="flex items-center gap-3">
            <Icon
              icon={<GiSunrise />}
              iconClassName="w-14 h-14 md:w-16 md:h-16 text-amber-400"
              aria-hidden
            />
            <div className="text-white text-sm text-nowrap flex flex-col items-center">
              <div className="font-semibold">Golden hour</div>
              <span className="text-xs text-gray-300">
                M: {goldenMorningStart} – {goldenMorningEnd}
              </span>
              <span className="text-xs text-gray-300">
                E: {goldenEveningStart} – {goldenEveningEnd}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Icon icon={<MdAccessTime />} iconClassName="w-12 h-12 md:w-14 md:h-14  text-sky-300" aria-hidden />
            <div className="text-white text-sm flex flex-col items-center">
              <span className="font-semibold">Day length</span>
              <span className="text-xs text-gray-300">{dayLength}</span>
            </div>
          </div>
        </div>

        {/* Right block: precise sunrise & sunset times */}
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Icon icon={<BsSunrise />} iconClassName="w-14 h-14 md:w-16 md:h-16  text-yellow-300" aria-hidden />
            <div className="text-white text-sm text-right flex flex-col items-center">
              <span className="font-semibold">Sunrise</span>
              <span className="text-xs text-gray-300">{sunriseLocal}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Icon icon={<BsSunset />} iconClassName="w-14 h-14 md:w-16 md:h-16  text-orange-400" aria-hidden />
            <div className="text-white text-sm text-right flex flex-col items-center">
              <span className="font-semibold">Sunset</span>
              <span className="text-xs text-gray-300">{sunsetLocal}</span>
            </div>
          </div>
        </div>
      </section>
    </CardFirstStyle>
  );
};

export default CurrentSun;
