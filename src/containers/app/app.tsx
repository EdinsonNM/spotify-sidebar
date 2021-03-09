import React from "react";
import "./app.scss";
import { Logo } from "@ps/styleguide";
export default function Root(props) {
  return (
    <section className="sidebar-app">
      <div className="sidebar-app__logo">
        <Logo width={120} />
      </div>
      <ul>
        <li>
          <a href="player">Inicio</a>
        </li>
        <li>
          <a href="search">buscar</a>
        </li>
        <li>
          <a href="/">cerrar sesión</a>
        </li>
      </ul>
    </section>
  );
}
