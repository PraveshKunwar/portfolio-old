import React from "react";
import Header from "../components/section_1/Header";
import ScrollToProjects from "../components/section_1/ScrollToProjects";
import Projects from "../components/section_1/Projects";
const Home: React.FC = () => {
  return (
    <div className="#home">
      <Header />
      <ScrollToProjects />
      <Projects />
    </div>
  );
};
export default Home;
