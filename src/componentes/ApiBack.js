export const Api = () => {
  const btn = () => {
    fetch('http://localhost:4000/user').then(res => res.json()).then(data => console.log(data))

  };

  return <button onClick={btn}>Traer Usuarios del back</button>;
};
