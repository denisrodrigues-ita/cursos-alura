import Head from "next/head";

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - Curso Alura</title>
    </Head>
  );
};

export default PageTitle;