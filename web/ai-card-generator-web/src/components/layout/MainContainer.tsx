import type { JSX } from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps): JSX.Element => {
  return <div className="p-10 mt-8">{children}</div>;
};

export default MainContainer;
