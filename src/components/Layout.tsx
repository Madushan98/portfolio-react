import { ReactNode } from "react";

interface LayoutProps {
  className?: string;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-6 md:p-16  ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
