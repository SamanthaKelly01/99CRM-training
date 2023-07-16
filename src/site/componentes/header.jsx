import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-md d-flex " data-bs-theme="dark">
      <div className="container">
        <div>
        <a className="navbar-brand" href="/app">
          <img src="Imagens/logo.png" alt="" height="28" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button></div>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#banner">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/app">
                Clientes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/app">
                Planos e Preços
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="/app">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
