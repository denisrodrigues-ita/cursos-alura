import Head from "next/head";
import LinkComponent from "@/components/Link";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";

const LOGO_ALURA_URL = "/images/alura-logo.svg";
const SIDE_ALURA_URL = "/images/alura-cases.png";

const HomeScreen = () => {
  return (
    <>
      <PageTitle title="Home" />
      <div className="row">
        <div className="col-12 col-lg-6">
          <Image
            src={LOGO_ALURA_URL}
            alt="Logo da Alura"
            height={50}
            width={100}
          />
          <div className="d-flex mt-5">
            <LinkComponent className="btn btn-primary" href="#">
              O que tem de novo?
            </LinkComponent>
            <LinkComponent className="btn" href="/faq">
              Confira as principais dúvidas
            </LinkComponent>
          </div>
          <div>
            <h1 className="mt-5">Alura Cases</h1>
            <p>
              A Alura Cases é uma plataforma de estudos de casos reais de
              empresas que utilizam tecnologia no seu dia a dia. Aqui você
              encontra os principais cases de sucesso e também os desafios que
              as empresas enfrentaram.
            </p>
            <p>Quer testar antes de todo o mundo?</p>
          </div>
          <form>
            <div className="mb-3">
              <div className="d-flex">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Seu email aqui."
                />
                <button type="submit" className="btn btn-primary ms-2">
                  Submit
                </button>
              </div>

              <div id="emailHelp" className="form-text">
                Nós não iremos compartilhar seu email.
              </div>
            </div>
          </form>
        </div>
        <div className="col-6 mt-5 mt-lg-0">
          <Image
            src={SIDE_ALURA_URL}
            alt="Logo da Alura"
            className="img-fluid"
            priority={true}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
