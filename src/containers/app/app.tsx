import React from "react";
import "./app.scss";
import { Logo, HomeIcon, SearchIcon, LibraryIcon } from "@ps/styleguide";

export default function Root(props) {
  return (
    <section className="sidebar-app">
      <div className="sidebar-app__logo">
        <Logo width={120} />
      </div>
      <ul className="sidebar-app__menu">
        <li>
          <a href="player">
            <HomeIcon />
            <p>Inicio</p>
          </a>
        </li>
        <li>
          <a href="search">
            <SearchIcon />
            <p>Buscar</p>
          </a>
        </li>
        <li>
          <a href="/">
            <LibraryIcon />
            <p>Tu biblioteca</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
