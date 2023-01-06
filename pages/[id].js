import ProjectDetails from "../components/ProjectDetails";

const ProjectDetailsPage = (props) => {
  return <ProjectDetails id={props.id} />;
};

export default ProjectDetailsPage;

ProjectDetailsPage.getInitialProps = async function (context) {
  const { id } = context.query;
  return { id };
};
