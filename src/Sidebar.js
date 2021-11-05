import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "./routes";

export function Sidebar(props) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <ul className="pt-2" {...props}>
      {routes.map((route) => (
        <Link
          className={`nav-item${isActive(route.path) ? " text-blue-700" : ""}`}
          key={route.path}
          to={route.path}
        >
          {route.name}
        </Link>
      ))}
    </ul>
  );
}
