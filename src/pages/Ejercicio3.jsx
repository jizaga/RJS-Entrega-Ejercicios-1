import { useState } from "react";

function Ejercicio3() {
  // Estado del input
  const [texto, setTexto] = useState("");

  // Estado de la lista
  const [lista, setLista] = useState([]);

  // Agregar elemento
  const agregarElemento = () => {
    if (texto.trim() === "") {
      alert("Por favor, escribe algo.");
      return;
    }

    setLista([...lista, texto]);

    setTexto("");
  };

  // Eliminar elemento
  const eliminarElemento = (indice) => {
    const nuevaLista = lista.filter((_, index) => index !== indice);

    setLista(nuevaLista);
  };

  // Detectar Enter
  const manejarTecla = (e) => {
    if (e.key === "Enter") {
      agregarElemento();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista Dinámica</h1>

      <h2>React-JS Ejercicio 3</h2>

      <div>
        <p>
          <strong>Objetivo del ejercicio:</strong> Trabajar con estados y
          renderizado dinámico.
        </p>

        <p>
          <strong>Ejercicio:</strong> Agregar y eliminar elementos de una lista.
        </p>

        <ul>
          <li>Agregar elementos escribiendo texto.</li>

          <li>Eliminar elementos individualmente.</li>
        </ul>
      </div>

      <hr />

      <div>
        <h2>Listado</h2>

        <input
          type="text"
          placeholder="Elemento de la lista..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={manejarTecla}
        />

        <button onClick={agregarElemento} style={{ marginLeft: "10px" }}>
          Agregar
        </button>

        <ul>
          {lista.map((item, index) => (
            <li key={index} style={{ marginTop: "10px" }}>
              {item}

              <button
                onClick={() => eliminarElemento(index)}
                style={{ marginLeft: "10px" }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ejercicio3;
