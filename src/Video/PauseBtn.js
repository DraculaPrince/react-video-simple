import React from 'react'

const PauseBtn = ({handleClick}) => {
  return (
    <div className='play-btn-wrap' role='button' tabIndex={0} onKeyPress={() => {}} onClick={handleClick}>
      <span className='pause-line'></span>
      <span className='pause-line'></span>
    </div>
  )
}

export default PauseBtn
