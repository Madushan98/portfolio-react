import React from "react";
import "../styles/scrollable.css";
import { Project } from "../common/types";
import ProjectCard from "./ProjectCard";

interface ScrollableComponentProps {
  children: Project[];
}

const ScrollableComponent: React.FC<ScrollableComponentProps> = ({
  children,
}) => {
  return (
    <div className="overflow-y-scroll max-h-[35rem] md:max-h-full">
      {/* Allow vertical scrolling on screens smaller than `md` */}
      {children.map((project) => (
        <div className="px-4 md:px-[10rem] py-5">
          {/* Adjust horizontal padding on screens smaller than `md` */}
          <ProjectCard key={project.id} project={project} />
        </div>
      ))}
    </div>
  );
};
export default ScrollableComponent;
