import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {design} from '@vgm/constant'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 5 * unit,
    backgroundColor: colors.green.base,
  },
})

export class VideoPlayer extends Component {
  render() {
    const {title} = this.props
    return <View style={styles.container} />
  }
}

export default VideoPlayer
