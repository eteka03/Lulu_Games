import Layout from "../components/ui/Layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("test");
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
