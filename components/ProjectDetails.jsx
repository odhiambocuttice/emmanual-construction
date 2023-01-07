import { ProjectsData } from "../data/projects";
import ContentPlaceholder from "./Card/ContentPlaceholder";
import Title from "./Card/Title";

import Image from "next/image";

const ProjectDetails = ({ id }) => {
  const project = ProjectsData.find((item) => item.category === id);

  return (
    <div className="flex justify-center flex-col bg-gradient-to-r from-gray-900 to-slate-600 rounded-lg">
      <Image
        src={`/${project.id}.jpg`}
        alt={id}
        width={800}
        height={400}
        className=" rounded-t-lg"
      />
      <div className="p-8 ">
        <Title title={project.title} category={project.category} />
        <ContentPlaceholder />
      </div>
    </div>
  );
};

export default ProjectDetails;
