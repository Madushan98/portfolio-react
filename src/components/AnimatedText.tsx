import { ReactNode } from "react";

interface AnimatedTextProps {
  text?: string;
  className?: string;
}

const Layout: React.FC<AnimatedTextProps> = ({ text, className }) => {
  return (
    <div
      className={`w-full mx-auto pt-1 flex items-center justify-center text-center overflow-hidden  `}
    >
      <h1
        className={`inline-block w-full text-dark font-bold capitalize  ${className}`}
      >
        {text?.split(" ").map((word, index) => {
          return (
            <span key={word + "-" + index} className="inline-block">
              {word}&nbsp;
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default Layout;
