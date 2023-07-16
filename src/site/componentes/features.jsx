import React from "react";

function Features() {
  return (
    <section id="features">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 feature-box">
            <i className="fa-solid fa-heart fa-4x"></i>
            <h3>Fácil de usar</h3>
            <p>O sistema possui ma interface muito simples e fácil de utilizar.</p>
          </div>
          <div className="col-md-4 feature-box">
            <i class="fa-solid fa-earth-americas fa-4x"></i>
            <h3>Em qualquer lugar</h3>
            <p>Gerencie seu fluxo de negócios de forma eficiente, onde quer que você esteja.</p> 
          </div>
          <div className="col-md-4 feature-box ">
            <i class="fa-solid fa-table fa-4x"></i>
            <h3>Organização é tudo</h3>
            <p>Tenha sua  carteira de clientes sempre muito bem organizada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
