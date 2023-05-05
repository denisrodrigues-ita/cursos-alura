import React from "react";
import { useRouter } from "next/router";
import { authService } from "../src/services/auth/authService";

const HomeScreen = () => {
  const router = useRouter();

  const [values, setValues] = React.useState({
    usuario: "omariosouto",
    senha: "safepassword",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await authService.login({
        username: values.usuario,
        password: values.senha,
      });

      // router.push("/auth-page-ssr");
      router.push("/auth-page-static");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuário"
          name="usuario"
          type="text"
          onChange={handleChange}
          value={values.usuario}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          onChange={handleChange}
          value={values.senha}
        />
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default HomeScreen;
