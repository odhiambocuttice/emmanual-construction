import Head from "next/head";
import { Navbar } from "../NavBar";

const ContainerBlock = ({ children, ...customMeta }) => {
  const meta = {
    title: "",
    description: "",
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Emmanuel Otieno" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <main className="flex justify-center items-center flex-col">
        <Navbar />
        <div className="max-w-5xl">{children}</div>
      </main>
    </>
  );
};

export default ContainerBlock;
