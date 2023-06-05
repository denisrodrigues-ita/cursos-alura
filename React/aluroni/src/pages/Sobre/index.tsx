import casa from "/@/assets/img/sobre/casa.png";
import massa1 from "/@/assets/img/sobre/massa1.png";
import massa2 from "/@/assets/img/sobre/massa2.png";

const imagens = [massa1, massa2];

const Sobre = () => {
  return (
    <section>
      <h3 className="text-3xl mb-2">Sobre</h3>

      <div>
        <div className="flex flex-col md:flex-row gap-2">
          <img src={casa} alt="Casa" />
          <div className="flex flex-col justify-evenly md:w-1/2">
            <p>
              Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a
              Massa Italiana Caseira mais saborosa e sofisticada de São Paulo!
              Prezamos pelos ingredientes tradicionais da culinária Italiana,
              frescos e de excelente qualidade para que sua experiência seja
              ainda mais intensa!
            </p>
            <p>
              Também possuímos uma cardápio de carnes com muitas opções de
              acordo com o seu gosto!
            </p>
            <p>
              Para acompanhar as massas italianas, Aluroni possui uma reserva de
              vinhos especiais, que harmonizam perfeitamente com o seu parto,
              seja carne ou massa!
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-between mt-12">
          {imagens.map((imagem, index) => (
            <img src={imagem} alt="Massa" key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
