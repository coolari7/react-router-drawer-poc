import React from "react";
import { IconButton } from "./components/IconButton";

export function Navbar(props) {
  return (
    <nav>
      <IconButton icon="menu" {...props} />
    </nav>
  );
}
