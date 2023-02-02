import { ProjectsData } from "../data/projects";
import Title from "./Card/Title";

import ImageSlide from "./ImageSlider";

const ProjectDetails = ({ id }) => {
  const project = ProjectsData.find((item) => item.id === id);
  const slides = project.images;

  return (
    <div className="flex justify-center items-center lg:bg-gradient-to-r from-gray-900 to-slate-600 rounded-lg mt-8 lg:w-full  flex-col lg:flex-row bg-none">
      <ImageSlide images={slides} />
      <div className="lg:mx-6 lg:max-w-xs mx-0 w-[350px]">
        <Title title={project.title} category={project.category} />
      </div>
    </div>
  );
};

export default ProjectDetails;
