import HttpClient from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
  async login({ username, password }) {
    try {
      const response = await HttpClient(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
        {
          method: "POST",
          body: { username, password },
        }
      );
      if (!response.ok) throw new Error(response.data.error.message);
      tokenService.save(response.data.data.access_token);
    } catch (e) {
      throw e;
    }
  },

  async getSession(context = null) {
    try {
      const token = tokenService.get(context);
      const response = await HttpClient(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) throw new Error("Not authorized");
      console.log(response)
      return response.data.data;
    } catch (e) {
      throw e;
    }
  },
};
