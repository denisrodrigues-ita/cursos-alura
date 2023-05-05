import React from "react";
import { useRouter } from "next/router";
import { authService } from "./authService";

export function withSession(funcao) {
  return async (context) => {
    try {
      const session = await authService.getSession(context);
      const modifiedCtx = {
        ...context,
        req: {
          ...context.req,
          session,
        },
      };
      return funcao(modifiedCtx);
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: "/?error=401",
        },
      };
    }
  };
}

export function useSession() {
  const [session, setSession] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const userSession = await authService.getSession();
        console.log(userSession);
        setSession(userSession);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data: { session },
    loading,
    error,
  };
}

export function withSessionHOC(Component) {
  return function Wrapper(props) {
    const router = useRouter();
    const session = useSession();

    if (!session.loading && session.error) {
      router.push("/?error=401");
    }

    const modifiedProps = {
      ...props,
      session: session.data.session,
    };
    return <Component {...modifiedProps} />;
  };
}
