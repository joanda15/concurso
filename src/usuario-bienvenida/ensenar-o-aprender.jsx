import "../index.css";

export function EnsenarOAprender() {
  return (
    <div className="container p-5 fondo-success border-dark rounded-5">
      <hr />
      <h1>Hola, usuario</h1>
      <strong className="mb-3">¿Qué planes tienes hoy?</strong> 
      <div className="d-flex flex-column mb-3 ">
        <button style={{background: "black", color: "white"}} className="btn btn-lg fondo-dark color-white border-primary mb-3">
          Aprender
        </button>
        <button style={{background: "black", color: "white"}} className="btn btn-lg fondo-dark color-white border-warning mb-3">
          Enseñar
        </button>
      </div>
    </div>
  );
}
