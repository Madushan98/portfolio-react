import Layout from "../components/Layout";
import { Project } from "../common/types";
import projects from "../common/data";
import ProjectCard from "../components/ProjectCard";
import ScrollableComponent from "../components/Scrollable";

const Projects: React.FC = () => {
  const projectList: Project[] = projects;
  return (
    <div>
      <main className="flex items-center text-dark w-full  ">
        <Layout className="pt-10">
          <ScrollableComponent children={projectList}></ScrollableComponent>
        </Layout>
      </main>
    </div>
  );
};

export default Projects;
