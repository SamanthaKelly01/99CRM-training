import React from "react";

function Banner() {
  return (
    <section id="banner">
      <div className="container-fluid">
        <div className=" row">
          <div id="row1" className="col-md-6  mx-auto text-center">
            <h1>
              Uma plataforma de CRM simples de configurar e facil de usar.
            </h1>
            <h4>Gerencie seus clientes em um único lugar.</h4>
            <button type="button" className="btn btn-dark btn-lg">
              Criar uma conta
            </button>
            <button type="button" className="btn btn-outline-light btn-lg">
              Fazer login
            </button>
          </div>

          <div className="col-md-6">
            <img src="Imagens/screenshot-crm.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
