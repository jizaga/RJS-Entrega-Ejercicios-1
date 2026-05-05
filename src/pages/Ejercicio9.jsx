import { useState, useEffect } from "react";

function Ejercicio9() {
  // Cargar tareas desde localStorage
  const [tasks, setTasks] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tasks");

    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  // Estado del input
  const [texto, setTexto] = useState("");

  // Guardar automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Agregar tarea
  const addTask = () => {
    if (texto.trim() === "") return;

    const nuevaTarea = {
      text: texto,
      completed: false,
    };

    setTasks([...tasks, nuevaTarea]);

    setTexto("");
  };

  // Cambiar estado completado
  const toggleTask = (index) => {
    const nuevasTareas = [...tasks];

    nuevasTareas[index].completed = !nuevasTareas[index].completed;

    setTasks(nuevasTareas);
  };

  // Limpiar completadas
  const clearCompleted = () => {
    const tareasFiltradas = tasks.filter((task) => !task.completed);

    setTasks(tareasFiltradas);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Tareas con LocalStorage</h1>

      <h2>React-JS Ejercicio 9</h2>

      <div>
        <p>
          <strong>Objetivo del ejercicio:</strong> Practicar persistencia de
          datos con localStorage.
        </p>

        <p>
          <strong>Ejercicio:</strong> Crear una lista de tareas.
        </p>

        <ul>
          <li>Marcar tareas completadas.</li>

          <li>Guardar automáticamente.</li>

          <li>Limpiar tareas completadas.</li>
        </ul>
      </div>

      <hr />

      <h2>Mis Tareas</h2>

      <div>
        <input
          type="text"
          placeholder="Añadir nueva tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <button onClick={addTask} style={{ marginLeft: "10px" }}>
          Añadir
        </button>
      </div>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            <span
              style={{
                marginLeft: "10px",
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>

      <button onClick={clearCompleted}>Limpiar completadas</button>
    </div>
  );
}

export default Ejercicio9;
