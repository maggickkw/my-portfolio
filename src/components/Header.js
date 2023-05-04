import { MdNightsStay, MdWbSunny } from "react-icons/md"
import { useEffect, useState } from "react";

export const Header = () => {
  
 const [darkMode, setDarkMode] = useState(
   JSON.parse(localStorage.getItem("darkMode")) || false
  );
  

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

    return (
      <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-teal-300">
        <nav className="flex justify-between items-center p-5">
          <h1 className="text-lg">MAGGICK</h1>

          <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer" />
            ) : (
              <MdNightsStay className="text-2xl cursor-pointer" />
            )}
          </div>
        </nav>
      </header>
    );
};
