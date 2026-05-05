import { useState, useRef } from "react";

function Ejercicio6() {
  // Estado del tiempo transcurrido
  const [elapsedTime, setElapsedTime] = useState(0);

  // Estado del temporizador
  const [isRunning, setIsRunning] = useState(false);

  // Referencias
  const timerRef = useRef(null);
  const startTimeRef = useRef(0);

  // Convertir tiempo a HH:MM:SS
  const timeToString = (time) => {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;

    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;

    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");

    let formattedMM = mm.toString().padStart(2, "0");

    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
  };

  // Iniciar temporizador
  const startTimer = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;

      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 1000);

      setIsRunning(true);
    }
  };

  // Pausar temporizador
  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  // Reiniciar temporizador
  const resetTimer = () => {
    clearInterval(timerRef.current);

    setElapsedTime(0);

    setIsRunning(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Temporizador con Inicio, Pausa y Reinicio</h1>

      <h2>React-JS Ejercicio 6</h2>

      <div>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar temporizadores y
          estados.
        </p>

        <p>
          <strong>Ejercicio:</strong> Controlar un temporizador.
        </p>

        <ul>
          <li>Iniciar el conteo.</li>

          <li>Pausar el temporizador.</li>

          <li>Reiniciar a 00:00:00.</li>
        </ul>
      </div>

      <hr />

      <div>
        <div
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {timeToString(elapsedTime)}
        </div>

        <button onClick={startTimer}>Iniciar</button>

        <button onClick={pauseTimer} style={{ marginLeft: "10px" }}>
          Pausar
        </button>

        <button onClick={resetTimer} style={{ marginLeft: "10px" }}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Ejercicio6;
