import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <h2>Índice</h2>

      <ol>
        <li>
          <Link to="/ejercicio1">Cambiador de Color de Fondo</Link>
        </li>
        <li>
          <Link to="/ejercicio2">Contador de Clics</Link>
        </li>
        <li>
          <Link to="/ejercicio3">Lista Dinámica</Link>
        </li>
        <li>
          <Link to="/ejercicio4">Filtro de Búsqueda en Tiempo Real</Link>
        </li>
        <li>
          <Link to="/ejercicio5">Calculadora Sencilla</Link>
        </li>
        <li>
          <Link to="/ejercicio6">
            Temporizador con Inicio, Pausa y Reinicio
          </Link>
        </li>
        <li>
          <Link to="/ejercicio7">Generador de Contraseñas Aleatorias</Link>
        </li>
        <li>
          <Link to="/ejercicio8">Contador de Palabras y Caracteres</Link>
        </li>
        <li>
          <Link to="/ejercicio9">Lista de Tareas con LocalStorage</Link>
        </li>
      </ol>
    </div>
  );
}

export default Inicio;
