import Image from "next/image";

const LOGO_TAILWIND = "/images/logo-tailwind.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-600 min-h-screen py-40">
      <div className="bg-white flex flex-col lg:flex-row justify-center items-center w-4/5 mx-auto p-12 shadow-2xl opacity-50">
        <Image
          className="w-2/5 lg:w-1/5"
          src={LOGO_TAILWIND}
          alt="Logo Tailwind CSS"
          width={300}
          height={300}
        />
        <h1 className="text-4xl lg:text-6xl font-black text-center">
          Olá Tailwind CSS!
        </h1>
        <Image
          className="w-2/5 lg:w-1/5"
          src={LOGO_TAILWIND}
          alt="Logo Tailwind CSS"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Home;
