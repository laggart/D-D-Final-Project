const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "DEMO", component: () => import("pages/IndexPage.vue") },
      {
        path: "SignIn",
        component: () => import("src/components/SignInForm.vue"),
      },
      {
        path: "SignUp",
        component: () => import("src/components/RegistreForm.vue"),
      },
    ],
  },
  {
    path: "/alt/",
    component: () => import("layouts/LandingPage.vue"),
    children: [
      { path: "User", component: () => import("src/components/CharPage.vue")},
      { path: "mycharacters", component: () => import("src/components/YourChars.vue") },
      { path: ":edit", name:"edit" ,component: () => import("src/components/EditChar.vue")},
      
    ],
    meta: { requiresAuth: true }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
