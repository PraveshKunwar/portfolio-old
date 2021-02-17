import React, { useEffect } from "react";
import Home from "./pages/Home";

const Landing: React.FC = () => {
  useEffect(() => {
    document.body.title = "Home | Pravesh Kunwar";
  }, []);
  return (
    <div className="#landing">
      <Home />
    </div>
  );
};

export default Landing;
