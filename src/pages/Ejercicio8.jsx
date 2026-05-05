import { useState } from "react";

function Ejercicio8() {
  // Estado del texto
  const [texto, setTexto] = useState("");

  // Contar palabras
  const contarPalabras = () => {
    return texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;
  };

  // Contar caracteres sin espacios
  const contarCaracteres = () => {
    return texto.replace(/\s/g, "").length;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contador de Palabras y Caracteres</h1>

      <h2>React-JS Ejercicio 8</h2>

      <div>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar eventos en tiempo
          real y manejo de estados.
        </p>

        <p>
          <strong>Ejercicio:</strong> Analizar texto mientras el usuario
          escribe.
        </p>

        <ul>
          <li>Mostrar cantidad de palabras.</li>

          <li>Mostrar caracteres sin espacios.</li>
        </ul>
      </div>

      <hr />

      <h2>Analizador de Texto en Tiempo Real</h2>

      <textarea
        placeholder="Escribe tu párrafo aquí..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows="8"
        cols="50"
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "10px",
        }}
      />

      <div
        style={{
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        <p>Palabras: {contarPalabras()}</p>

        <p>Caracteres (sin espacios): {contarCaracteres()}</p>
      </div>
    </div>
  );
}

export default Ejercicio8;
