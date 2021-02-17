import React, { useEffect } from "react";
import Landing from "./Landing";

const App: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#1a202c";
  }, []);
  return (
    <div className="#personal-portfolio">
      <Landing />
    </div>
  );
};

export default App;
