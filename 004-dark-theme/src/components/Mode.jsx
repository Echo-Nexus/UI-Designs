import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Mode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={() =>
        setTheme((prevTheme) =>
          prevTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {theme === "light" ? <Moon className="cursor-pointer"/> : <Sun className="text-black cursor-pointer"/>}
    </div>
  );
};

export default Mode;