import { about, project } from "@/resources/content";

const baseURL = "john.fore.land";

const routes = [
  {
    id: "home",
    path: "/",
    icon: "home",
  },
  {
    id: "about",
    label: about.label,
    path: "/about",
    icon: "person",
  },
  {
    id: "project",
    label: project.label,
    path: "/project",
    icon: "project",
  },
];

const validRoutes = routes.reduce((routes, item) => {
  routes[item.path] = true;
  return routes;
}, {});

const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "orange", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
};

const effects = {
  mask: {
    cursor: false,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: 2,
    color: "brand-on-background-weak",
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

const display = {
  location: true,
  time: true,
};

export { baseURL, display, effects, routes, style, validRoutes };
