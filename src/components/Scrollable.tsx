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
    <div className="overflow-y-scroll max-h-[35rem] ">
      {children.map((project) => (
        <div className="px-[10rem] py-5">
          <ProjectCard key={project.id} project={project} />
        </div>
      ))}
    </div>
  );
};

export default ScrollableComponent;
