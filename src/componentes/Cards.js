export function Cards(props) {
  return (
    <>
      <h1>Detalles de Ventas 📄</h1>
      <p>Usuario: {props.name} 👨🏻</p>
      <p>Apellido: {props.last_name} 👨🏻</p>
      <p>Saldo: {props.monto} 💵</p>
    </>
  );
}
