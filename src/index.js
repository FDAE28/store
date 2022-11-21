import React from "react";
import ReactDOM from "react-dom/client";
import { Cards } from "./componentes/Cards";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Cards name="Fernando" last_name="Aguero" monto={3000} />
    <Cards name="Claudia" last_name="Oviedo" monto={4500} />
  </>
);
