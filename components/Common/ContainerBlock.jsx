import Head from "next/head";
import { Navbar } from "../NavBar";

const ContainerBlock = ({ children, ...customMeta }) => {
  const meta = {
    title: "Minioms",
    description:
      "Welcome to Minioms, a Design, Construction and Project Management company! We are a full-service company that specializes in creating unique, beautiful and functional spaces for residential and commercial clients.",
    image: "/MINIOMS_LOGO.jpg",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="icon" href="/MINIOMS_LOGO.jpg" />
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
