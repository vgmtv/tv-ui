import React, {Component} from 'react'
import {View, Image, StyleSheet, Text} from 'react-primitives'
import {design} from '@vgm/design-specs'

const {
  size: {unit},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 29 * unit,
    height: 16.5 * unit,
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
  },
  line: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 3 * unit,
    padding: 0.35 * unit,
    backgroundColor: '#000',
    opacity: 0.80,
    alignItems: 'center'
  },
  titleMain: {
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    fontSize: 1.5 * unit,
    letterSpacing: 0.2 * unit,
    color: colors.white.base,
  },
  durationBox: {
    position: 'absolute',
    paddingTop: 0.1 * unit,
    paddingBottom: 0.1 * unit,
    paddingRight: 0.2 * unit,
    paddingLeft: 0.2 * unit,
    right: 0.5 * unit,
    top: 0.5 * unit,
    backgroundColor: colors.black.base,
    borderRadius: 3,
    opacity: 0.75
  },
  durationText: {
    color: colors.white.base,
    fontSize: 1.1 * unit,
  },
})

export class VideoItem extends Component {
  static defaultProps = {
    title: '1-Tiến Hóa Hay Sáng Tạo Đều Là Tôn Giáo',
    duration: '10:12',
    image: null,
    displayTitle: true,
    displayDuration: true,
  }
  render() {
    const {
      title,
      duration,
      image,
      displayTitle,
      displayDuration,
      style,
      onItemPress,
      ...props
    } = this.props
    return (
        <View style={[styles.container, style]} {...props}>
          <View style={styles.layout}>
            {image && <Image style={styles.image} source={image} />}
            {displayDuration && (
              <View style={styles.durationBox}>
                <Text style={styles.durationText}>{duration}</Text>
              </View>
            )}
            {displayTitle && (
              <View style={styles.line}>
                <Text numberOfLines={1} style={styles.titleMain}>{title}</Text>
              </View>
            )}
          </View>
        </View>
    )
  }
}

export default VideoItem
