import { api } from "src/boot/axios";

export async function login(context, credentials) {
  await api.get("/sanctum/csrf-cookie");

  await api.post("/login", credentials);

  return api
    .get("/api/user")
    .then((userResponse) => {
      context.commit("setAuthenticated", true);
      context.commit("setUser", userResponse.data);
    })
    .catch(() => {
      context.commit("setAuthenticated", false);
      context.commit("setUser", null);
    });
}

export async function logout(context) {
  await api.post("/logout");

  context.commit("setAuthenticated", false);
  context.commit("setUser", null);
}
