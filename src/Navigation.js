import React, { useEffect } from "react";
import { FaTv, FaFilm, FaInfoCircle } from "react-icons/fa";

export default function Navigation({ focusedSection, setFocusedSection }) {
  const [focusedNavIndex, setFocusedNavIndex] = React.useState(0);
  const navItems = [
    { name: "Home", icon: <FaTv /> },
    { name: "Movies", icon: <FaFilm /> },
    { name: "Favourite", icon: <FaInfoCircle /> },
  ];
  const handleKeyDown = (e) => {
    if (focusedSection === "navigation") {
      if (e.key === "ArrowUp") {
        setFocusedNavIndex((prev) =>
          prev > 0 ? prev - 1 : navItems.length - 1
        );
      } else if (e.key === "ArrowDown") {
        setFocusedNavIndex((prev) =>
          prev < navItems.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        setFocusedSection("content");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setFocusedSection("content");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedSection, focusedNavIndex]);

  return (
    <div
      className={`${
        focusedSection === "navigation" ? "w-1/4" : "w-1/12"
      } bg-gradient-to-b from-zinc-950 to-pink-300 text-white p-4 transition-all duration-300 flex flex-col items-center justify-center`}
    >
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`mb-4 cursor-pointer p-2 rounded-lg ${
                focusedSection === "navigation" && focusedNavIndex === index
                  ? "bg-customPink"
                  : ""
              }`}
            >
              {item.icon}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
