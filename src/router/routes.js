const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "DEMO", component: () => import("pages/IndexPage.vue") },
      { path: "SignIn", component: () => import("src/components/SignInForm.vue") },
      { path: "SignUp", component: () => import("components/RegistreForm.vue") },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
