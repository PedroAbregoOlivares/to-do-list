import React from 'react'

const ListadoTareas = ({tareas, eliminarTarea, cambiarEstado, setEdit}) => {

  return (
    <div className='containerTareas'>
      { tareas.length > 0 ?
        tareas.map(tarea => (
          <div className='listTareas' key={tarea.id}>
            <p>{tarea.estado ? <del className='del'>{tarea.nombre}</del> : tarea.nombre}</p>
            <div className='actions'>
              <button className={`${tarea.estado ? 'complete' : 'status'}`} onClick={() => cambiarEstado(tarea.id)}>{tarea.estado ? 'Completada' : 'Incompleta'}</button>
              <button className='edit' onClick={() => setEdit(tarea)}>Editar</button>
              <button className='delete' onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
            </div>
          </div>
        ))
        :
        <p>No hay tareas</p>
      }

    </div>
  )
}

export default ListadoTareas