
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/Auth/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/register.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Auth/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/login.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/Dashboard/DashboardLayout'),
    children: [
      { path: '', component: () => import('pages/Dashboard/dashboard') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
