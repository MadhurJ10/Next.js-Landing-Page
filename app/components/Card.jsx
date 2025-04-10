import React, { useContext } from "react";
import { movingcontext } from "../context/Movingprovider";

const Card = () => {
  const data = useContext(movingcontext);

  return (
    <div className="h-screen flex items-center gap-[15px] overflow-hidden relative">
      {data.map((item, index) => (
        <div key={index}
          className="card h-[600px] w-[400px] bg-amber-800 rounded-[130px] shrink-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.url})` }}
        ></div>
      ))}
    </div>
  );
};

export default Card;
