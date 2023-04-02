import React from "react";
import { Project } from "../common/types";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="max-w-[60rem]  rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src={project.imageUrl} alt={project.title} /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 py-4">
        <a
          href={project.linkUrl}
          className="inline-block text-sm bg-dark hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
