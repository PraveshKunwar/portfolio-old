import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import Loading from "./components/loader/Loading";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    document.body.style.backgroundColor = "#0a192f";
  }, []);
  return (
    <div className="#personal-portfolio">
      {loading ? <Loading /> : <Landing />}
    </div>
  );
};

export default App;
