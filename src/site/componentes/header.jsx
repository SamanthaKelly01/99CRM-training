import React from "react";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/app">
            99CRM
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/app">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/app">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/app">
                  Clientes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/app">
                  Planos e Preços
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link" href="/app">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
