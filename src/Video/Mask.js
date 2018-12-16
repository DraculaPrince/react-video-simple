import React from 'react'

const Mask = ({ isFullScreen, children, handleClick }) => {
  return (
    <div className={isFullScreen ? 'fullscreen video-mask' : 'video-mask'}
         role='button'
         tabIndex='-1'
         onKeyPress={() => {
         }}
         onClick={typeof handleClick === 'function' ? () => handleClick() : null}>
      {children}
    </div>
  )
}

export default Mask
