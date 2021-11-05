import React from "react";
import { Routes, Route } from "react-router-dom";
import { Drawer } from "./components/Drawer";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { routes } from "./routes";

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="m-2">
      <Navbar onClick={() => setOpen(true)} />

      <Drawer open={open} timeout={250} onClose={() => setOpen(false)}>
        <Sidebar onClick={() => setOpen(false)} />
      </Drawer>

      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </div>
  );
}
