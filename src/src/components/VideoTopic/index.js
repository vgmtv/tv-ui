import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {design} from '@vgm/constant'

const {
  size: {unit},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 9 * unit,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: unit,
    position: 'absolute',
  },
  titleMain: {
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    fontSize: 2.5 * unit,
    letterSpacing: 0.1 * unit,
    color: colors.white.base,
  },
  titleSub: {
    fontFamily: 'SF Pro Display',
    fontWeight: '200',
    fontSize: 1.5 * unit,
    letterSpacing: 0.1 * unit,
    color: colors.white.base,
  },
})

export class VideoTopic extends Component {
  static defaultProps = {
    mainTitle: 'This is a very long topic title to see how things are handled',
    subTitle: 'number of topic',
  }
  render() {
    const {mainTitle, subTitle, style} = this.props
    return (
        <View style={[styles.container, style]}>
          <View style={styles.content}>
            <Text style={styles.titleMain} numberOfLines={1}>
              {mainTitle}
            </Text>
            <Text style={styles.titleSub} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
        </View>
    )
  }
}

export default VideoTopic
