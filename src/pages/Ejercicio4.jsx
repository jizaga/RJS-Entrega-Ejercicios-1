import { useState } from "react";

function Ejercicio4() {
  // Estado del campo de búsqueda
  const [busqueda, setBusqueda] = useState("");

  // Lista de animales
  const animales = ["Perro", "Gato", "Pez", "Hámster", "Loro", "Conejo"];

  // Filtrar elementos según búsqueda
  const animalesFiltrados = animales.filter((animal) =>
    animal.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Filtro de Búsqueda en Tiempo Real</h1>

      <h2>React-JS Ejercicio 4</h2>

      <div>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar eventos y
          renderizado dinámico.
        </p>

        <p>
          <strong>Ejercicio:</strong> Filtrar una lista mientras el usuario
          escribe.
        </p>

        <ul>
          <li>La lista se actualiza automáticamente.</li>
        </ul>

        <p>
          <strong>Ejemplo:</strong> Si escribes "Ga", solo aparecerá "Gato".
        </p>
      </div>

      <hr />

      <h2>Buscar Animales</h2>

      <input
        type="text"
        placeholder="Escribe para buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {animalesFiltrados.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ejercicio4;
