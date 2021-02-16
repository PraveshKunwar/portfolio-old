import React, { useEffect, useState } from "react";
import Loading from "./loader/Loading";
import Landing from "./Landing";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = "#0a192f";
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="#personal-portfolio">
      {loading ? <Loading /> : <Landing />}
    </div>
  );
};

export default App;
