import { about, work, gallery } from "@/app/resources/content";

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
    id: "work",
    label: work.label,
    path: "/work",
    icon: "grid",
  },
  {
    id: "gallery",
    label: gallery.label,
    path: "/gallery",
    icon: "gallery",
  },
];

const validRoutes = routes.reduce((routes, item) => {
  routes[item.path] = true;
  return routes;
}, {});

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  "/work/example": false,
};

const style = {
  theme: "light", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "orange", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
};

const effects = {
  mask: {
    cursor: true,
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

export {
  validRoutes,
  routes,
  protectedRoutes,
  effects,
  style,
  display,
  baseURL,
};
