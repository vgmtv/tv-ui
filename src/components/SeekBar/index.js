import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {design} from '@vgm/design-specs'

const {
  size: {unit},
  colors,
} = design

const styles = StyleSheet.create({
  seekBar: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 2.25 * unit,
    alignItems: 'center',
  },
  seekBarTimer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingRight: 2.5 * unit,
    paddingLeft: 2.5 * unit,
    marginBottom: 0.5 * unit,
  },
  seekBarProgress: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 0.5 * unit,
    backgroundColor: colors.green.base,
  },
  textTimer: {
    fontFamily: 'SF Pro Display',
    fontWeight: '100',
    fontSize: 1.25 * unit,
    color: colors.white.base,
    letterSpacing: 0.1 * unit,
  },
})

export class SeekBar extends Component {
  static defaultProps = {
    current: 120,
    duration: 3600,
  }
  render() {
    const {current, duration} = this.props
    return (
      <View {...this.props} style={styles.seekBar}>
        <View style={styles.seekBarTimer}>
          <Text style={styles.textTimer}>{current}</Text>
          <Text style={styles.textTimer}>{duration}</Text>
        </View>
        <View style={styles.seekBarProgress} />
      </View>
    )
  }
}

export default SeekBar
