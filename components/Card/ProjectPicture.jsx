import Image from "next/image";

const ProjectPicture = ({ id }) => {
  return <Image src={`/${id}.jpg`} alt={id} fill className="object-cover" />;
};

export default ProjectPicture;
