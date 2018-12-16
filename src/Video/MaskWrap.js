import Mask from './Mask'
import { reload } from '../utils/util'
import React from 'react'
import PauseBtn from './PauseBtn'
import PlayBtn from './PlayBtn'
import styles from './MaskWrap.module.css'

const MaskWrap = ({ fullscreen, connectionType, isFullScreen, showingControlBtn, playing, togglePlay, toggleFullScreen, toggleShowingControlBtn }) => {
  console.log('ppp')
  if (window.location.search === '?test=true') {
    window.Connection = {
      WIFI : 'wifi'
    }
  }
  if (connectionType && window.Connection && (connectionType === Connection.NONE || connectionType === Connection.ETHERNET) && !playing) {
    return (
      <Mask isFullScreen={isFullScreen}>
        <div className={styles['hint-wrap']}>
          <p>网络不可用，请稍后重试</p>
          <div role='button' tabIndex={0} onKeyPress={() => {
          }} onClick={() => reload()}>
            点击重试
          </div>
        </div>
      </Mask>
    )
  } else if (connectionType && window.Connection && connectionType !== Connection.WIFI && !playing) {
    return (
      <Mask isFullScreen={isFullScreen}>
        <div className={styles['hint-wrap']}>
          <p>非WiFi状态下使用，播放该视频将消耗XXM流量</p>
          <div role='button'
               tabIndex={0}
               className={styles['button']}
               onKeyPress={() => {
               }}
               onClick={() => togglePlay()}>
            继续播放
          </div>
        </div>
      </Mask>
    )
  } else if ((connectionType && window.Connection && connectionType === Connection.WIFI) || playing) {
    const PlayOrPauseBtn = showingControlBtn ? (playing ? <PauseBtn handleClick={togglePlay}/> :
      <PlayBtn handleClick={togglePlay}/>) : null

    /* 支持全屏 + 显示控制按钮 + (播放中 或者 全屏中) 显示全屏按钮 */
    const FullScreenBtn = fullscreen && showingControlBtn && (playing || isFullScreen) ? (isFullScreen ?
      <i className={`${styles['icon-fullscreen']} iconfont`} role='button' tabIndex={0} onKeyPress={() => {
      }} onClick={toggleFullScreen}>&#xe654;</i> :
      <i className={`${styles['icon-fullscreen']} iconfont`} role='button' tabIndex={0} onKeyPress={() => {
      }} onClick={toggleFullScreen}>&#xe650;</i>) : null

    return (
      <Mask isFullScreen={isFullScreen} handleClick={toggleShowingControlBtn}>
        {PlayOrPauseBtn}
        {FullScreenBtn}
      </Mask>
    )
  }
  return null
}

export default MaskWrap
