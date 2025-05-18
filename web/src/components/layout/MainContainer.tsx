import type { JSX } from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps): JSX.Element => {
  return <div className="py-10 px-30 min-h-dvh">{children}</div>;
};

export default MainContainer;
