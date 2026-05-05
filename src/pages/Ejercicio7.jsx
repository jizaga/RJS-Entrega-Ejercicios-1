import { useState } from "react";

function Ejercicio7() {
  // Estados
  const [longitud, setLongitud] = useState("");

  const [password, setPassword] = useState("");

  const [mensaje, setMensaje] = useState("");

  // Generar contraseña
  const generarPassword = () => {
    const longitudNumero = parseInt(longitud);

    // Limpiar mensajes
    setPassword("");
    setMensaje("");

    // Validación
    if (isNaN(longitudNumero) || longitudNumero < 4) {
      setMensaje("Error: la longitud debe ser mayor o igual a 4.");

      return;
    }

    // Caracteres disponibles
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

    let nuevaPassword = "";

    // Generar contraseña
    for (let i = 0; i < longitudNumero; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);

      nuevaPassword += caracteres[indiceAleatorio];
    }

    setPassword(nuevaPassword);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Generador de Contraseñas Aleatorias</h1>

      <h2>React-JS Ejercicio 7</h2>

      <div>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar formularios y
          generación aleatoria.
        </p>

        <p>
          <strong>Ejercicio:</strong> Generar contraseñas seguras.
        </p>

        <ul>
          <li>Usar letras, números y símbolos.</li>

          <li>Validar longitud mínima.</li>
        </ul>
      </div>

      <hr />

      <div>
        <h2>Generador de Contraseñas</h2>

        <input
          type="number"
          placeholder="Ingrese la longitud"
          min="4"
          value={longitud}
          onChange={(e) => setLongitud(e.target.value)}
        />

        <button onClick={generarPassword} style={{ marginLeft: "10px" }}>
          Generar contraseña
        </button>

        <div
          style={{
            color: "red",
            marginTop: "15px",
          }}
        >
          {mensaje}
        </div>

        <div
          style={{
            marginTop: "15px",
            fontWeight: "bold",
            wordBreak: "break-all",
          }}
        >
          {password}
        </div>
      </div>
    </div>
  );
}

export default Ejercicio7;
