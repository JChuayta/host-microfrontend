import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@example/mf-header",
  app: () => System.import<LifeCycles>("@example/mf-header"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@example/mf-footer",
  app: () => System.import<LifeCycles>("@example/mf-footer"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
