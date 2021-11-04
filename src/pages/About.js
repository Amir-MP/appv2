import React from "react";
import { useTheme } from "../components/context/ThemeContext";
const About = () => {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#171717",
    color: darkTheme ? "#CCC" : "#333",
  };
  return (
    <div style={themeStyles} className="about">
      <h1>درباره ما</h1>
    </div>
  );
};

export default About;
