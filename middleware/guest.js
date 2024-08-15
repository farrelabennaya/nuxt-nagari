export default defineNuxtRouteMiddleware((to, from) => {
  const tokenStore = useTokenStore();
  const auth = useAuthStore();

  const guestOnlyRoutes = ['/auth/login', '/auth/register',];

  if (tokenStore.getStatus && guestOnlyRoutes.includes(to.path)) {
    switch (auth.user.role_id) {
      case 1:
        return navigateTo('/admin');
      case 2:
        return navigateTo('/petugas');
      case 3:
        return navigateTo('/warga');
      default:
        return navigateTo('/');
    }
  }
});
