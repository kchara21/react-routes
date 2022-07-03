import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";

const ReactTopics = () => {
  return (
    <div>
      <h3>Temas de React</h3>

      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="state">State</Link>
        </li>
        <li>
          <Link to="components">Components</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ReactTopics;
