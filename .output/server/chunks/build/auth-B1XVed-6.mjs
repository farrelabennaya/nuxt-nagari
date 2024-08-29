import { d as defineStore, b as navigateTo } from './server.mjs';

const useTokenStore = defineStore("token", {
  state: () => ({ token: null, loggedIn: false }),
  persist: true,
  getters: {
    getToken: (state) => state.token,
    getStatus: (state) => state.loggedIn
  },
  actions: {
    setToken(token) {
      this.token = token;
      this.loggedIn = true;
    },
    removeToken() {
      const auth = useAuthStore();
      auth.$reset();
      this.$reset();
      return navigateTo("/auth/login");
    }
  }
});
const useAuthStore = defineStore("auth", {
  state: () => ({ user: {} }),
  persist: {
    paths: ["user"]
  },
  getters: {
    getUser: (state) => state.user
  },
  actions: {
    async login(formData) {
      try {
        const { data } = await $fetch("http://laravel-api.test/api/login", {
          method: "POST",
          body: { ...formData }
        });
        this.commonSetter(data);
      } catch (error) {
        throw error;
      }
    },
    async register(formData) {
      try {
        const { data } = await $fetch("http://laravel-api.test/api/register", {
          method: "POST",
          body: { ...formData }
        });
        this.commonSetter(data);
      } catch (error) {
        throw error;
      }
    },
    async createuser(formData) {
      const tokenStore = useTokenStore();
      try {
        const { data } = await $fetch("http://laravel-api.test/api/users", {
          method: "POST",
          body: { ...formData },
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenStore.getToken}`
          }
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
    async createPetugas(formData) {
      const tokenStore = useTokenStore();
      try {
        const { data } = await $fetch("http://laravel-api.test/api/users/petugas", {
          method: "POST",
          body: { ...formData },
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenStore.getToken}`
          }
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
    async logout() {
      const tokenStore = useTokenStore();
      try {
        const res = await $fetch("http://laravel-api.test/api/logout", {
          method: "POST",
          //body: { ...formData },
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenStore.getToken}`
          }
        });
        tokenStore.removeToken();
        this.user = {};
        console.log(res);
        return navigateTo("/auth/login");
      } catch (error) {
        throw error;
      }
    },
    commonSetter(data) {
      const tokenStore = useTokenStore();
      tokenStore.setToken(data.token);
      this.user = {
        ...data.user,
        role_id: data.user.role.id
      };
      const roleRedirect = {
        1: "/admin",
        2: "/petugas",
        3: "/warga"
      };
      const targetRoute = roleRedirect[this.user.role_id] || "/";
      console.log("Redirecting to:", targetRoute);
      navigateTo(targetRoute);
    }
  }
});

export { useTokenStore as a, useAuthStore as u };
//# sourceMappingURL=auth-B1XVed-6.mjs.map
