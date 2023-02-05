import React, { useCallback, useMemo } from "react";

const Text = ({ type, children }) => {
  const display = useCallback(
    () => <h1 className="text hero">{children}</h1>,
    [children]
  );
  return <>{display()}</>;
};

export default Text;
