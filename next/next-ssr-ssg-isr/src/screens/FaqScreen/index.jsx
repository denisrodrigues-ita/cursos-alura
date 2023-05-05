import React from "react";
import PageTitle from "@/components/PageTitle";
import LinkComponent from "@/components/Link";

const FaqScreen = ({ faq }) => {
  return (
    <div>
      <PageTitle title="FAQ" />
      <h1>FAQ</h1>
      <LinkComponent href="/">Ir para Home</LinkComponent>
      <ul>
        {faq.length === 0 && <p>Sem conteudos para mostrar...</p>}
        {faq.map((item) => (
          <details key={item?.question}>
            <summary>{item?.question}</summary>
            <p>{item?.answer}</p>
          </details>
        ))}
      </ul>
    </div>
  );
};

export default FaqScreen;
