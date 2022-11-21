import "../app.css";
export function Cards(props) {
  return (
    <>
      <div className="card">
        <div className="img-card"></div>
        <div className="content">
          <div className="title">
            <h1>Detalles de ventas</h1>
            <p className="details">Nombre: {props.name}</p>
            <p className="details">Apellido: {props.last_name}</p>
            <p className="details">Monto: {props.monto}</p>
            <p className="details">Email: {props.email}</p>
            <p className="details">Telefono: {props.telefono}</p>
          </div>
          <div className="btn-container">
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
}
