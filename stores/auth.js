export const useAuthStore = defineStore("auth", {
  state: () => ({ user: {} }),
  persist: {
    paths: ["user"],
  },

  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async login(formData) {
      try {
        const { data } = await $fetch("https://www.demo-ta.my.id/api/login", {
          method: "POST",
          body: { ...formData },
        });

        this.commonSetter(data);
      } catch (error) {
        throw error;
      }
    },

    async register(formData) {
      try {
        const { data } = await $fetch("https://www.demo-ta.my.id/api/register", {
          method: "POST",
          body: { ...formData },
        });

        this.commonSetter(data);
      } catch (error) {
        throw error;
      }
    },

     async createuser(formData) {
      const tokenStore = useTokenStore();
      try {
        const { data } = await $fetch("https://www.demo-ta.my.id/api/users", {
          method: "POST",
          body: { ...formData },
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenStore.getToken}`,
          },
        });

        return data;
      } catch (error) {
        throw error;
      }
    },

    async createPetugas(formData) {
      const tokenStore = useTokenStore();
      try {
        const { data } = await $fetch("https://www.demo-ta.my.id/api/users/petugas", {
          method: "POST",
          body: { ...formData },
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenStore.getToken}`,
          },
        });

        return data;
      } catch (error) {
        throw error;
      }
    },


    async logout() {
      const tokenStore = useTokenStore();
      try {
        const res = await $fetch("https://www.demo-ta.my.id/api/logout", {
          method: "POST",
          //body: { ...formData },
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenStore.getToken}`,
          },
        });

        tokenStore.removeToken()
        this.user = {}
        console.log(res)
        return navigateTo('/auth/login')
      } catch (error) {
        throw error
      }
    },

    commonSetter(data) {
      const tokenStore = useTokenStore();
      tokenStore.setToken(data.token);

      // Set user data with role_id from role object
      this.user = {
        ...data.user,
        role_id: data.user.role.id,
      };

      const roleRedirect = {
        1: '/admin',
        2: '/petugas',
        3: '/warga',
      };

      const targetRoute = roleRedirect[this.user.role_id] || '/';
      console.log("Redirecting to:", targetRoute);
      navigateTo(targetRoute);
    },
  },
});