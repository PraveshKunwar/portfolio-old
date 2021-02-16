import React, { useEffect } from "react";

const Landing: React.FC = () => {
  useEffect(() => {
    document.body.title = "Home | Pravesh Kunwar";
  }, []);
  return <div>Hello world</div>;
};

export default Landing;
