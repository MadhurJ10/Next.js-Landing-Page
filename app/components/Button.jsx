import React from 'react'

const Button = (param) => {
  return (
    <div>
      <button className='px-[10px] py-[5px] border rounded-[5px]'>{param.inner}</button>
    </div>
  )
}

export default Button
