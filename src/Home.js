import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";

function Home({ focusedSection, setFocusedSection }) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const contentGrid = [
    [
      { id: 1, text: "Content 1", image: "./img/shodh.webp" },
      { id: 2, text: "Content 2", image: "./img/palatok.jpg" },
      { id: 3, text: "Content 3", image: "./img/local-jamai.jpg" },
      { id: 4, text: "Content 4", image: "./img/kopa-samsu.jpg" },
      { id: 5, text: "Content 5", image: "./img/shukher-sawrgo.webp" },
      { id: 6, text: "Content 6", image: "./img/dusman-khatam.jpg" },
      { id: 7, text: "Content 7", image: "./img/osukh.png" },
      { id: 8, text: "Content 8", image: "./img/teen-tekka.jpg" },
      { id: 9, text: "Content 9", image: "./img/tumi-railine.jpg" },
      { id: 10, text: "Content 10", image: "./img/ural-pream.jpg" },
      { id: 11, text: "Content 11", image: "./img/tomar-amar-biye.png" },
      { id: 12, text: "Content 12", image: "./img/spy-agency.png" },
      { id: 13, text: "Content 13", image: "./img/icche-korena.jpg" },
      { id: 14, text: "Content 14", image: "./img/ogosalo-bhalobasa.jpg" },
      { id: 15, text: "Content 15", image: "./img/golpo-plz.jpg" },
      { id: 16, text: "Content 16", image: "./img/bangladesh.jpg" },
    ],
  ];

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (focusedSection === "content") {
      if (e.key === "ArrowUp") {
        setFocusedIndex((prev) => (prev > 3 ? prev - 4 : prev));
      } else if (e.key === "ArrowDown") {
        setFocusedIndex((prev) => (prev < 12 ? prev + 4 : prev));
      } else if (e.key === "ArrowLeft") {
        if (focusedIndex % 4 === 0) {
          e.preventDefault();
          setFocusedSection("navigation");
        } else {
          setFocusedIndex((prev) => (prev % 4 > 0 ? prev - 1 : prev));
        }
      } else if (e.key === "ArrowRight") {
        setFocusedIndex((prev) => (prev % 4 < 3 ? prev + 1 : prev));
      } else if (e.key === "Enter") {
        navigate("/player", {
          state: { selectedContent: contentGrid[0][focusedIndex] },
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedSection, focusedIndex]);

  return (
    <>
      <div
        className={`${
          focusedSection === "navigation" ? "w-3/4" : "w-full"
        } h-screen bg-gradient-to-r from-pink-500 to-purple-500 flex flex-col items-center justify-center transition-all duration-300 overflow-y-auto`}
      >
        <div className="relative w-full mt-28">
          <img src="./img/logo.png" alt="logo" className="absolute -top-[50px] right-0 w-[100px]"/>
        </div>
        <div className="w-full flex items-start justify-start px-6 py-4">
          <h4 className="text-xl font-semibold">Dramas & Series</h4>
        </div>
        <div className="flex flex-wrap justify-start w-full">
          {contentGrid[0].map((item, index) => (
            <div
              key={item.id}
              className={`p-1 w-[23%] text-center cursor-pointer rounded-lg  transition-all duration-200 ${
                focusedSection === "content" && focusedIndex === index
                  ? "bg-customPink text-white"
                  : " text-black"
              }`}
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              {/* {item.text} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default React.memo(Home);
