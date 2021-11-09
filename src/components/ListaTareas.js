import React from "react";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <div>
      <ul className="list-group my-5">
        {
          props.arregloTareas.map(( elemento, indice)=><ItemTarea key={indice} dato={elemento}></ItemTarea>)
        }
      </ul>
    </div>
  );
};

export default ListaTareas;
