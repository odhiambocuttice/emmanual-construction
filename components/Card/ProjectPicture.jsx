import Image from "next/image";

const ProjectPicture = ({ id }) => {
  return (
    <div className="">
      <Image src={`/${id}.jpg`} alt={id} layout="fill" />
    </div>
  );
};

export default ProjectPicture;
