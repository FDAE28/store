import React from "react";
import ReactDOM from "react-dom/client";
import { Cards } from "./componentes/Cards";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Cards
    name="Fernando"
    last_name="Aguero"
    monto={3000}
    email="fernandoaes20@gmail.com"
    telefono="0993433446"
  />
);
