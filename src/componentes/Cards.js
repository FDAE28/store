export function Cards (props){


  let btn = info => console.log(info.target.id)
  let inp = info => console.log(info.target.value)


  return (
    <>
    <h1>Usuarios</h1>
    <p><b>Nombre:</b> {props.name}</p>
    <p><b>Apellido:</b> {props.last_name}</p>
    <p><b>Saldo:</b> {props.monto}</p>
    <p><b>Email:</b> {props.email}</p>
    <p><b>Telfono:</b> {props.telefono}</p>
    <button id="Nro-id" onClick={btn}>Imprimir Detalles</button>
    <input onChange={inp}></input>
    </>
  )
}