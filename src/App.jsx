import Landing from "./pages/Landing";
import "./App.css";
import topcorner from "./assets/topcorner.svg";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="flex flex-col" id={theme}>
        <img
          src={topcorner}
          alt="topcorner"
          className="hidden md:flex absolute top-0 right-0 z-0"
        />
        <div  className="flex flex-row justify-center items-center mr-5 mt-5">
          <label className="mr-2">
            {" "}
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={20}
            offColor="#767676"
            onColor="#27AE60"
          />
        </div>

        <div id="main" className="md:mx-[160px] md:my-[140px] my-5 shadow-md rounded-lg">
          <Landing />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
