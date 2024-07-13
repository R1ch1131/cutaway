import React, { useEffect, useState } from "react";
import styles from "./../Styles/Header.module.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 70) {
        // условие, при котором меняется цвет хедера
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
      <div className={scrolled ? styles["header-scrolled"] : styles.header}>
        <div className={scrolled ? styles["list-scrolled"] : styles.list}>
          <p>О себе</p>
          <p>Желания</p>
          <p>Связь</p>
        </div>
      </div>
    </div>
  );
};
