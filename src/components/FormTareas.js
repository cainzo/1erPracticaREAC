import React, { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  // aqui va la logica
  // crear los estados necesarios
  let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tareas, setTareas] = useState(tareasLocalStorage);
  //const [tareas, setTareas] = useState([]);

  //aqui uso el ciclo de vida de un componente
    useEffect(()=>{
     

      //esto funciona en montaje y actualizacion
      console.log('ejecutando el ciclo de vida')
      localStorage.setItem('listaTareas', JSON.stringify(tareas))
    }, [tareas]);
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

  function borrarTarea(nombre) {
    
    let arregloModificado = tareas.filter((tarea)=>{return tarea !== nombre})
    //console.log(arregloModificado);
    setTareas(arregloModificado);
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
        <ListaTareas arregloTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
      </section>
    </>
  );
};

export default FormTareas;
