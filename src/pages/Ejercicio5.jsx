import { useState } from "react";

function Ejercicio5() {
  // Estados
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [resultado, setResultado] = useState("Resultado: 0");

  const [esError, setEsError] = useState(false);

  // Función calculadora
  const calcular = (operacion) => {
    // Validar campos vacíos
    if (num1 === "" || num2 === "") {
      mostrarResultado("Error: Campos vacíos", true);
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let resultadoOperacion = 0;

    switch (operacion) {
      case "sumar":
        resultadoOperacion = n1 + n2;
        break;

      case "restar":
        resultadoOperacion = n1 - n2;
        break;

      case "multiplicar":
        resultadoOperacion = n1 * n2;
        break;

      case "dividir":
        if (n2 === 0) {
          mostrarResultado("Error: División por 0", true);
          return;
        }

        resultadoOperacion = n1 / n2;
        break;

      default:
        return;
    }

    mostrarResultado(`Resultado: ${resultadoOperacion}`, false);
  };

  // Mostrar resultado
  const mostrarResultado = (mensaje, error) => {
    setResultado(mensaje);
    setEsError(error);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Calculadora Sencilla</h1>

      <h2>React-JS Ejercicio 5</h2>

      <div>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar formularios y
          estados.
        </p>

        <p>
          <strong>Ejercicio:</strong> Realizar operaciones matemáticas básicas.
        </p>

        <ul>
          <li>Validar campos vacíos.</li>

          <li>Validar división por cero.</li>
        </ul>
      </div>

      <hr />

      <div>
        <h3>Calculadora</h3>

        <input
          type="number"
          placeholder="Primer número"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Segundo número"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <br />
        <br />

        <div>
          <button onClick={() => calcular("sumar")}>+</button>

          <button
            onClick={() => calcular("restar")}
            style={{ marginLeft: "10px" }}
          >
            -
          </button>

          <button
            onClick={() => calcular("multiplicar")}
            style={{ marginLeft: "10px" }}
          >
            ×
          </button>

          <button
            onClick={() => calcular("dividir")}
            style={{ marginLeft: "10px" }}
          >
            ÷
          </button>
        </div>

        <br />

        <div
          style={{
            fontWeight: "bold",
            color: esError ? "red" : "green",
          }}
        >
          {resultado}
        </div>
      </div>
    </div>
  );
}

export default Ejercicio5;
