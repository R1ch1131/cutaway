import React, { useEffect, useState } from "react";
import "./../Styles/index.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 70) { // условие, при котором меняется цвет хедера
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
        <div className={scrolled ? "header-scrolled" : "header"}>
            <div className={scrolled ? "spisok-scrolled" : "spisok"}>
                <p>О себе</p>
                <p>Увлечения\Хобби</p>
                <p>Отношения</p>
                <p>Связь</p>
            </div>
        </div>
    </div>
  );
};