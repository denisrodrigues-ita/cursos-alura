import Layout from "../components/Layout";
import "../css/globalStyle.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main className="container my-5">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default App;
