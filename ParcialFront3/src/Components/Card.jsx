import React from 'react'

const Card = ({auto, setElegir}) => {

  return(
      <div>
          <h3>{auto.marca}</h3>
          <h4>{auto.modelo}</h4>
          <h4>{auto.tipo}</h4>
          <button onClick={() =>setElegir(true)}>Saber más</button>
      </div>
      )
  
  }
  console.log(Card);
export default Card