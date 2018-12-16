import React from 'react'
import styles from './PlayBtn.module.css'

const PlayBtn = ({handleClick}) => {
  return (
    <div className={styles.circle} role='button' tabIndex={0} onKeyPress={() => {}} onClick={handleClick}>
      <span className={styles['arrow-right']}></span>
    </div>
  )
}

export default PlayBtn
