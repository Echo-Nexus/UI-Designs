import Mode from "./components/Mode";
import { useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`h-screen w-screen ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <header
          className={`h-14 flex justify-between items-center py-2 px-4 bg-gray-300`}
        >
          <h1 className={`text-2xl font-semibold font-serif select-none ${theme === "dark" ? "text-blue-700" : "text-black"}`}>
            Sparky
          </h1>
          <div className="flex items-center gap-6 text-lg select-none">
            <a
              href="/"
              className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-2xl px-3 transition-transform duration-300 hover:-translate-y-1"
            >
              Home
            </a>
            <a
              href="/about"
              className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-2xl px-3 transition-transform duration-300 hover:-translate-y-1"
            >
              About{" "}
            </a>
            <a
              href="/contact"
              className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-2xl px-3 transition-transform duration-300 hover:-translate-y-1"
            >
              Contact
            </a>
            <Mode />
          </div>
        </header>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
