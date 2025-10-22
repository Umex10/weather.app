import { useState, useEffect } from "react";

const Settings = () => {
  // default from localStorage (if set) otherwise 'dark'
  const [mode, setMode] = useState<"light" | "dark">(() =>
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  );

  // persist and toggle a `.dark` class on <html> so global styles can react
  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div className="w-full md:pt-6 min-w-[300px] max-w-md md:max-w-none md:flex-[3]">
      <div className="flex flex-col gap-3 items-start">
        <h2 className="text-2xl text-white font-extrabold">Settings</h2>

        <div className="w-full bg-transparent border border-gray-400/50 p-6 rounded-2xl ">
          <div className="flex flex-col justify-center items-center gap-2 md:items-start">
            <h3 className="text-xl text-white">Mode</h3>

            {/* wrapper with subtle bg so buttons' padding reveals it */}
            <div className="w-full p-1 bg-gray-700/20 rounded-xl inline-flex items-center gap-1">
              <button
                type="button" 
                onClick={() => setMode("light")}
                className={
                  "w-1/2 px-4 py-1 rounded-lg text-sm font-semibold transition flex items-center justify-center " +
                  (mode === "light"
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-300 hover:bg-white/5")
                }
              >
                Light Mode
              </button>

              <button
                type="button"
                onClick={() => setMode("dark")}
                className={
                  "w-1/2 px-4 py-1 rounded-lg text-sm font-semibold transition flex items-center justify-center " +
                  (mode === "dark"
                    ? "bg-violet-500 text-white shadow-sm"
                    : "text-gray-300 hover:bg-white/5")
                }
              >
                Dark Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
