import React from 'react'

const Form = () => {

    const [vehiculo, setVehiculo] = useState({
        marca: "",
        modelo: "",
        tipo: "",
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)
    let regex = /\s/g;
    const handleSubmit = () => {
        if (vehiculo.marca.length >= 3 && regex(vehiculo.marca) && vehiculo.modelo.length >= 6) {
            setShow(true)
            setError(false)
        }else{
            setError(true)
        }
       
    }


  return (
    <div>
        <label>Marca: </label>
        <input type="text" placeholder='Ingresa una marca.' value={vehiculo.marca} onChange={(e) => setVehiculo({...vehiculo, marca: e.target.value})}/>
        <label>Modelo: </label>
        <input type="text" placeholder='Ingresa un modelo.' value={vehiculo.modelo} onChange={(e) => setVehiculo({...vehiculo, modelo: e.target.value})}/>
        <label>Tipo: </label>
        <input type="text" placeholder='Ingresa el tipo.' value={vehiculo.tipo} onChange={(e) => setVehiculo({...vehiculo, tipo: e.target.value})}/>
        <button onClick={handleSubmit}>Agregar</button>
        {show && <h3 style={{color: "geen"}}>Agregaste un vehiculo con exito</h3> }
        {error && <h3 style={{color: "red"}}>Por favor chequea que la información sea correcta</h3> }
    </div>
  )
}

export default Form