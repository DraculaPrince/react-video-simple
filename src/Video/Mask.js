import styles from './Mask.module.css'
import React from 'react'

const Mask = ({ isFullScreen, children, handleClick }) => {
  return (
    <div className={isFullScreen ? `${styles['fullscreen']} ${styles['video-mask']}` : `${styles['video-mask']}`}
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
