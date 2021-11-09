import React, { useState } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  // aqui va la logica
  // crear los estados necesarios
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tareas, setTareas] = useState([]);

  //funciones para setear
  function guardarTarea(e) {
   // console.log(e.target.value);
   setTareaIndividual(e.target.value);
  };
  function handleSubmit(e) {
      e.preventDefault();
      console.log('xXx');
      setTareas([...tareas, tareaIndividual]);
      //limpiar el import 
      setTareaIndividual('');
  };
  return (
    // aqui va el maquetado y poca logica
    <>
      <form className=" container my-5" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            className="form-control"
            onChange={guardarTarea}
            value={tareaIndividual}
          />
          <button className="btn btn-outline-light">Agregar</button>
        </div>
      </form>
      <section className="container">
        <ListaTareas arregloTareas={tareas}></ListaTareas>
      </section>
    </>
  );
};

export default FormTareas;
