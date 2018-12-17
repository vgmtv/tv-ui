import React, {Component} from 'react'
import {View, StyleSheet, Text, Touchable} from 'react-primitives'
import {design} from '@vgm/design-specs'

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
  titleHolder: {
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

export class AudioTopic extends Component {
  static defaultProps = {
    mainTitle: 'Topic',
    subTitle: 'number of topic',
  }

  render() {
    const {mainTitle, subTitle, style} = this.props
    return (
        <View style={[styles.container, style]}>
          <View style={styles.titleHolder}>
            <Text style={styles.titleMain} numberOfLines={1}>{mainTitle}</Text>
            <Text style={styles.titleSub}>{subTitle}</Text>
          </View>
        </View>
    )
  }
}
export default AudioTopic
