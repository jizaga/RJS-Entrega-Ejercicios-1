import { useState } from "react";

function Ejercicio1() {
  const [color, setColor] = useState("#ffffff");

  // Función para generar color hexadecimal aleatorio
  const generarColorAleatorio = () => {
    const nuevoColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColor(nuevoColor);
  };

  // Estilo para cubrir toda la pantalla
  const pantallaEstilo = {
    backgroundColor: color,
    minHeight: "100vh",
    padding: "20px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={pantallaEstilo}>
      <h1>Cambiador de Color de Fondo</h1>

      <h2>React-JS Ejercicio 1</h2>

      <div>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar eventos en React y
          manejo de estados.
        </p>

        <p>
          <strong>Ejercicio:</strong> Haz clic en el botón para cambiar el color
          de fondo.
        </p>
      </div>

      <hr />

      <button onClick={generarColorAleatorio}>Cambiar Color</button>
    </div>
  );
}

export default Ejercicio1;
