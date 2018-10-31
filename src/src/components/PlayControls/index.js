import React, {Component} from 'react'
import {View, StyleSheet} from 'react-primitives'
import {design} from '@vgm/constant'
import {
  PlayIcon,
  RewindIcon,
  ForwardIcon,
  NextIcon,
  PreviousIcon,
} from '@a7/icons'
import {IconButton} from '@a7/cuoi'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  controls: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 9 * unit,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export class PlayControls extends Component {
  static defaultProps = {
    onPrev: () => {},
    onNext: () => {},
    onRewind: () => {},
    onForward: () => {},
    onPlay: () => {},
    onPause: () => {},
  }

  initialState = {
    playing: false,
  }

  state = this.initialState

  togglePlayPause = () => {
    const {onPlay, onPause} = this.props
    this.setState(
      ({playing}) => ({playing: !playing}),
      () => {
        this.state.playing ? onPause() : onPlay()
      },
    )
  }

  render() {
    const {onPrev, onNext, onRewind, onForward} = this.props
    return (
      <View {...this.props} style={styles.controls}>
        <IconButton onPress={onPrev}>
          <PreviousIcon size={icon.sm} />
        </IconButton>
        <IconButton onPress={onRewind}>
          <RewindIcon size={icon.sm} />
        </IconButton>
        <IconButton onPress={this.togglePlayPause}>
          <PlayIcon size={icon.lg} />
        </IconButton>
        <IconButton onPress={onForward}>
          <ForwardIcon size={icon.sm} />
        </IconButton>
        <IconButton onPress={onNext}>
          <NextIcon size={icon.sm} />
        </IconButton>
      </View>
    )
  }
}

export default PlayControls
