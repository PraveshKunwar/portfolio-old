import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";

const Landing: React.FC = () => {
  useEffect(() => {
    document.body.title = "Home | Pravesh Kunwar";
  }, []);
  return (
    <div className="#landing">
      <Navbar />
    </div>
  );
};

export default Landing;
