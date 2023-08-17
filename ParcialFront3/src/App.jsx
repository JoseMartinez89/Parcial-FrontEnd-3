import { useState } from "react"
import Card from "./Components/Card"
import Form from "./Components/Form"


function App (){

  const [elegir, setElegir] = useState(false)

  let autos = [
    {id: 1, marca: "Volkswagen", modelo: "Amarok", tipo: "Pickup"},
    {id: 2, marca: "Ford", modelo: "Mondeo", tipo: "Sedan"},
    {id: 3, marca: "Honda", modelo: "CRV", tipo: "Suv"},
  ]


  return (
    <>
       {autos.map((auto) => <Card key={auto.id} auto = {auto} setElegir = {setElegir} />)}
       {elegir && <Form/>}
    </>
  )
}

export default App
