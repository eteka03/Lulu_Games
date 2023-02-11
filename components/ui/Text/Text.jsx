import React, { useCallback } from "react";

const Text = ({ type, className, children }) => {
  const display = useCallback(() => {
    let defaultReturn = <h1>undefined</h1>;
    if (type === "hero")
      return <h1 className={`${className} text hero`}>{children}</h1>;
    return defaultReturn;
  }, []);
  return <>{display()}</>;
};

export default Text;
