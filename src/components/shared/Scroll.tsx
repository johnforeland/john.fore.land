"use client";

import { useEffect, useState } from "react";

export function Scroll({ to }: { to: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the arrow if the user scrolls manually
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTarget = () => {
    const targetElement = document.getElementById(to);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`hidden md:inline w-auto mt-40 mr-40 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="transition-transform hover:scale-110">
        <div
          className="grid content-center animate-pulse"
          style={{ animationIterationCount: 4, animationDuration: "5s" }}
          onClick={scrollToTarget}
        >
          <div className="mb-2 text-gray-500 text-sm">Scroll to see more</div>
          <button className="bg-black text-white py-4 px-4 rounded-full text-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 opacity-30 ">
            ↓
          </button>
        </div>
      </div>
    </div>
  );
}
