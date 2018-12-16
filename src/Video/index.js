import React, { Component } from 'react';
import framework from '../framework'
import network from '../utils/network'
import MaskWrap from './MaskWrap'

import './Video.css'

class Video extends Component {

  constructor (props) {
    super(props)
    this.videoRef = React.createRef()
    this.state = {
      showingControlBtn: true,
      playing: false,
      isFullScreen: false,
      connectionType: ''
    }
  }

  handleVideoEnd = () => {
    this.setState({
      playing: false
    })
  }

  /* 上线、离线处理 */
  handleOnOffline = () => {
    if (navigator.connection.type === Connection.WIFI) {
      this.play()
    } else {
      this.pause()
    }
  }

  async componentDidMount () {
    await framework.init()
    network.init(() => {
        this.handleOnOffline()
      },
      () => {
        this.handleOnOffline()
      })
    this.setState({
      connectionType: navigator.connection.type
    })
    document.getElementById('video').addEventListener('ended', this.handleVideoEnd, false)
    // this.videoRef.current.addEventListener('ended', this.handleVideoEnd, false)
  }

  /* 播放暂停 */
  togglePlay = () => {
    const videoEl = this.videoRef.current
    this.setState({
      playing: !this.state.playing
    })
    if (videoEl.paused) {
      videoEl.play()
    } else {
      videoEl.pause()
    }
  }

  /* 播放 */
  play = () => {
    const videoEl = this.videoRef.current
    this.setState({
      playing: true
    })
    videoEl.play()
  }

  /* 暂停 */
  pause = () => {
    const videoEl = this.videoRef.current
    this.setState({
      playing: false
    })
    videoEl.pause()
  }

  /* 是否显示功能按钮 */
  toggleShowingControlBtn = () => {
    this.setState({
      showingControlBtn: !this.state.showingControlBtn
    })
  }

  /* 切换全屏 */
  toggleFullScreen = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen
    })
  }

  render () {
    console.log(navigator.connection)

    const { fullscreen } = this.props
    const { showingControlBtn, playing, isFullScreen, connectionType } = this.state

    return (
      <div className='video-container'>
        <MaskWrap fullscreen={fullscreen}
                  connectionType={connectionType}
                  isFullScreen={isFullScreen}
                  showingControlBtn={showingControlBtn}
                  playing={playing}
                  toggleFullScreen={() => this.toggleFullScreen()}
                  togglePlay = {() => this.togglePlay()}
                  toggleShowingControlBtn={() => this.toggleShowingControlBtn()}/>
        <video id='video'
               ref={this.videoRef}
               className={`${isFullScreen ? 'fullscreen' : ''}`}
               src='https://media.w3.org/2010/05/sintel/trailer.mp4'
               poster='https://media.w3.org/2010/05/sintel/poster.png'>
          <track kind="captions"/>
        </video>
      </div>
    );
  }
}

export default Video
