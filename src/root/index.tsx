import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeItems } from "../data/routeItems";

function Root() {
  return (
    <Routes>
      {routeItems.map(({ id, path, component }) => (
        <Route key={id} path={path} element={component} />
      ))}
    </Routes>
  );
}

export default Root;
