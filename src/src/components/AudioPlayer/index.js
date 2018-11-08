import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {ShuffleIcon, RepeatIcon, MoreIcon} from '@vgm/icons'
import {design} from '@vgm/constant'
import SeekBar from '../SeekBar'
import PlayControls from '../PlayControls'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 23 * unit,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 3 * unit,
    paddingLeft: 1.25 * unit,
    paddingRight: 1.25 * unit,
    justifyContent: 'space-between',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 3 * unit,
    paddingRight: 2.5 * unit,
    paddingLeft: 2.5 * unit,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: 'SF Pro Display',
    fontWeight: '200',
    fontSize: 2 * unit,
    letterSpacing: 0.1 * unit,
    color: colors.white.base,
  },
})
export class AudioPlayer extends Component {
  static defaultProps = {
    title: 'Toi la ai?',
  }
  render() {
    const {title} = this.props
    return (
      <View {...this.props} style={styles.container}>
        <View style={styles.header}>
          <RepeatIcon color={colors.white.base} />
          <Text numberOfLines={1} style={styles.textTitle}>
            {title}
          </Text>
          <ShuffleIcon color={colors.white.base} />
        </View>
        <SeekBar />
        <PlayControls />
        <View style={styles.footer}>
          <MoreIcon size={icon.sm} color={colors.white.base} />
          <MoreIcon size={icon.sm} color={colors.white.base} />
        </View>
      </View>
    )
  }
}
export default AudioPlayer
