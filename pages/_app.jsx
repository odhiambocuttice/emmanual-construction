import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/index.css";
import ContainerBlock from "../components/Common/ContainerBlock";
import { DataProvider } from "../context/DataContext";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <ContainerBlock>
        <ToastContainer limit={1} />
        <Component {...pageProps} />
      </ContainerBlock>
    </DataProvider>
  );
}
