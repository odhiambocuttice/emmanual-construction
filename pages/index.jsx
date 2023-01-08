import { useRouter } from "next/router";
import Card from "../components/Card";
import ProjectDetails from "../components/ProjectDetails";
import Modal from "../components/Common/Modal";

export default function Home() {
  let router = useRouter();

  return (
    <div>
      {router.query.id && (
        <Modal
          onClose={() => {
            router.push("/");
          }}
        >
          <ProjectDetails id={router.query.id} />
        </Modal>
      )}
      <Card />
    </div>
  );
}
