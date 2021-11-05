import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";

export function Sidebar(props) {
  return (
    <ul {...props}>
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
}
