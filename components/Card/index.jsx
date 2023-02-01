import Link from "next/link";

import ImagePicture from "./ProjectPicture";
import { ProjectsData } from "../../data/projects";

const Card = () => {
  return (
    <div className="flex justify-around items-center flex-wrap text-black font-semibold">
      {ProjectsData.map((item, idx) => (
        <li key={idx} className="card list-none ">
          <div className="h-full overflow-hidden relative rounded-xl">
            <Link
              key={item.id}
              href={`/?id=${item.id}`}
              // as={`/${item.category}`}
              passHref
            >
              <ImagePicture id={item.id} />
              <h1 className="absolute top-0 left-0 p-6 uppercase">
                {item.category}
              </h1>
              <h3 className="">{item.title}</h3>
            </Link>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Card;
