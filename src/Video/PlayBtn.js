import React from 'react'

const PlayBtn = ({handleClick}) => {
  return (
    <div className='play-btn-wrap' role='button' tabIndex={0} onKeyPress={() => {}} onClick={handleClick}>
      <span className='arrow-right'></span>
    </div>
  )
}

export default PlayBtn
