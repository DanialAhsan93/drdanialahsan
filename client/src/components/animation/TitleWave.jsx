import React from "react";
import { Link } from "react-router-dom";
import "./titlewave.css";

const TitleWave = ({ theme, logo, logoDark }) => {
  const text = "Pain Care Clinic";
  const coloredSpans = [
    { from: 0, to: 3, className: "text-[#27477D] dark:text-gray-200" }, // "Pain"
    { from: 5, to: 8, className: "text-[#06CCEC]" },                     // "Care"
    { from: 10, to: 15, className: "text-[#27477D] dark:text-gray-200" }, // "Clinic"
  ];

  const getClassForIndex = (index) => {
    for (const span of coloredSpans) {
      if (index >= span.from && index <= span.to) return span.className;
    }
    return "";
  };

  return (
    <Link
      to="/"
      className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex items-center space-x-2"
    >
      <img
        src={theme === "light" ? logo : logoDark}
        alt="logo"
        className="w-[40px] h-[40px]"
      />
      <div className="flex">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`wave-letter ${getClassForIndex(index)}`}
            style={{
              animationDelay: `${index * 0.15}s`, // stagger start
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default TitleWave;