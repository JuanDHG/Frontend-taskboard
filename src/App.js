import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faPencil,
  faClock,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    // Usamos axios para hacer la petición HTTP
    axios
      .get("http://localhost:3000/task-board/obtener")
      .then((response) => {
        settasks(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las tareas:", error);
      });
  }, []);

  console.log(tasks);

  return (
    <div className="container">
      <div id="titulo">
        <div className="centrado">
          <FontAwesomeIcon icon={faListCheck} className="icon-large" />
        </div>
        <h1>My Task Board</h1>
        <div className="centrado2">
          <FontAwesomeIcon icon={faPencil} className="icon-small" />
        </div>
      </div>
      <div
        className="tarjeta"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        {tasks.map((task) => (
          
            <Card1 key={task.id} task={task} />
          
        ))}
      </div>
    
        <Card1/>

    </div>
  );
}

function Card1({ task }) {
  // Task por defecto si no se proporciona ninguna tarea
  const defaultTask = { description: "Añadir una tarea" };

  // Usar la tarea proporcionada o la tarea por defecto
  const currentTask = task || defaultTask;

  
    return (
      <Card className="custom-card proceso">
        <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="caja3">
            <div className="caja">
              <FontAwesomeIcon icon='faListCheck' className="inc" />
            </div>
            <Card.Title className="card-titulo">{currentTask.description}</Card.Title>
          </div>
          <div className="caja2">
            <FontAwesomeIcon icon={faSpinner} className="inc" />
          </div>
        </Card.Body>
      </Card>
    );
  } 

// Definir propiedades por defecto para Card1


