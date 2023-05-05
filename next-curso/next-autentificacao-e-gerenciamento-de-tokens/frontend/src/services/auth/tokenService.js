import nookies from "nookies";

const ONE_YEAR = 60 * 60 * 24 * 365;
const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";

export const tokenService = {
  save(accessToken, context = null) {
    globalThis?.localStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
    nookies.set(context, ACCESS_TOKEN_KEY, accessToken, {
      maxAge: ONE_YEAR,
      path: "/",
    });
  },
  get(context = null) {
    const cookies = nookies.get(context);
    return cookies[ACCESS_TOKEN_KEY] || "";
    // return globalThis?.localStorage?.getItem(ACCESS_TOKEN_KEY);
  },
  delete(context = null) {
    globalThis?.localStorage?.removeItem(ACCESS_TOKEN_KEY);
    nookies.destroy(context, ACCESS_TOKEN_KEY);
  },
};
