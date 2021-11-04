import React from "react";
import { useTheme } from "../components/context/ThemeContext";
const Home = () => {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#171717",
    color: darkTheme ? "#CCC" : "#333",
  };
  return (
    <div style={themeStyles} className="home">
      <h1>خانه</h1>
    </div>
  );
};

export default Home;
