import React from "react";

type SizeWH = {
  children: any;
};

const nossr: React.FunctionComponent<SizeWH> = ({ children }) => {
  return <>{children}</>;
};

export default nossr;
