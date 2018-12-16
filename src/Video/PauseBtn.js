import React from 'react'
import styles from './PauseBtn.module.css'

const PauseBtn = ({handleClick}) => {
  return (
    <div className={styles.circle} role='button' tabIndex={0} onKeyPress={() => {}} onClick={handleClick}>
      <span></span>
      <span></span>
    </div>
  )
}

export default PauseBtn
