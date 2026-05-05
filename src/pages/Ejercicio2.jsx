import { useState } from "react";

function Ejercicio2() {
  // Estado del contador
  const [clics, setClics] = useState(0);

  // Función para aumentar clics
  const contarClics = () => {
    setClics(clics + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contador de Clics</h1>

      <h2>React-JS Ejercicio 2</h2>

      <div>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar el manejo de
          eventos y estados en React.
        </p>

        <p>
          <strong>Ejercicio:</strong> Haz clic en el botón para aumentar el
          contador.
        </p>
      </div>

      <hr />

      <div>
        <button onClick={contarClics}>Contar Clics</button>

        <span style={{ marginLeft: "15px" }}>Clics: {clics}</span>
      </div>
    </div>
  );
}

export default Ejercicio2;
