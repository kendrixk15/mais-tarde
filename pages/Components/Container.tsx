import React, { ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: ContainerProps) => {
  return <div className={`${className} lg:px-16 py-4`}>{children}</div>;
};

export default Container;
