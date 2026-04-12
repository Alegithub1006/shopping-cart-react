import { Link } from "react-router";
import "../styles/PageNotFound.css";
import { Home, NotFound } from "../components/Icons";

export function PagenotFound() {
  return (
    <section className="PNF-container">
      <div className="PNF">
        <div>4</div>
        <NotFound width={"5rem"} height={"5rem"} />
        <div>4</div>
      </div>
      <div className="PNF-main">
        <h2 className="PNF-title">Pagina no encontrada</h2>
        <p className="PNF-text">
          !Opss esta direccion no esta disponible o es incorrecta, por favor
          pruebe con la ruta correcta
        </p>
      </div>

      <Link className="PNF-link" to={"/"}>
        <Home />
        <p>volver atras</p>
      </Link>
    </section>
  );
}
