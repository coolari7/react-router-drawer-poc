import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: Contact,
  },
  {
    path: "/profile",
    name: "My Profile",
    component: Profile,
  },
];
