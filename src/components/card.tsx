import React from "react";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Card;
