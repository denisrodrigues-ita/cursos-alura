import FaqScreen from "../screens/FaqScreen";

export default FaqScreen;

export async function getStaticProps() {
  const url =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados JSON: ", error);
      return [];
    }
  };

  return {
    props: {
      faq: await fetchData(),
    },
  };
}
