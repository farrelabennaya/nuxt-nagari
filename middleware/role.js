export default defineNuxtRouteMiddleware((to, from) => {
  const tokenStore = useTokenStore();
  const auth = useAuthStore();

  if (!tokenStore.getStatus) {
    return navigateTo('/auth/login');
  } else {
    const roleRoutes = {
      1: '/admin',    // Admin routes
      2: '/petugas',  // Petugas routes
      3: '/warga'     // Warga routes
    };

    const allowedRoutePrefix = roleRoutes[auth.user.role_id];
    
    if (allowedRoutePrefix && !to.path.startsWith(allowedRoutePrefix)) {
      return navigateTo(allowedRoutePrefix);
    }
  }
});
