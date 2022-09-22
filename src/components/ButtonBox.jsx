import React from 'react'

const ButtonBox = ({getRandomAll,randomColor}) => {
    const colorObj = {
        backgroundColor: randomColor
    }
  return (
    <div>
              <button 
      className='card__btn' 
      style={colorObj}
      onClick={getRandomAll}
      >&#62;</button>
    </div>
  )
}

export default ButtonBox