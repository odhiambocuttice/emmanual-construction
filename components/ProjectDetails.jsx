import { ProjectsData } from "../data/projects";
import Title from "./Card/Title";

import ImageSlide from "./ImageSlider";

const ProjectDetails = ({ id }) => {
  const project = ProjectsData.find((item) => item.id === id);
  const slides = project.images;

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-900 to-slate-600 rounded-lg mt-3 lg:w-full w-[55%] flex-col lg:flex-row">
      <ImageSlide images={slides} />
      <div className="lg:mx-6 lg:max-w-xs mx-0 w-[400px]">
        <Title title={project.title} category={project.category} />
      </div>
    </div>
  );
};

export default ProjectDetails;
