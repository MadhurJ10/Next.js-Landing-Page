import React, { useContext } from 'react'
import { movingcontext } from '../context/Movingprovider'


const Card = (props) => {

  let data = useContext(movingcontext);

  return (
    //   <div className="card h-[99%] w-[400px] bg-amber-800 rounded-[130px] shrink-0 bg-[url()"></div>
    <div
      className="card h-[99%] w-[400px] bg-amber-800 rounded-[130px] shrink-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${props.image})` }}
    ></div>
  )
}

export default Card
