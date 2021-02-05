import { useEffect, useState } from "react";

export const StateButton = ({ nome, sigla, callback }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeClass, setActiveClass] = useState("btn-outline-primary");
  useEffect(() => {
    if (isActive) {
      setActiveClass("btn-primary");
    } else {
      setActiveClass("btn-outline-primary");
    }
  }, [isActive]);

  return (
    <div
      className={`btn ${activeClass} rounded-pill mx-1`}
      onClick={() => {
        setIsActive(!isActive);
        callback();
      }}
    >
      {nome}
    </div>
  );
};
