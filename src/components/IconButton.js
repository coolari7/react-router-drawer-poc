import React from "react";

export function IconButton({ icon, ...props }) {
  return (
    <button type="button" {...props}>
      <span className="material-icons">{icon}</span>
    </button>
  );
}
