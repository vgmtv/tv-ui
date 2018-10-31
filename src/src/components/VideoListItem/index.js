import React, {Component} from 'react'
import {View, StyleSheet, Text, Image} from 'react-primitives'
import {MoreIcon} from '@a7/icons'
import {design} from '@vgm/constant'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: unit,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    padding: unit,
    width: 16 * unit,
    height: 9 * unit,
    opacity: 1,
    backgroundColor: colors.secondary.base,
  },
  labelContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 1.5 * unit,
  },
  textMain: {
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    letterSpacing: 0.1 * unit,
    color: colors.white.base,
    fontSize: 1.5 * unit,
  },
  duration: {
    fontFamily: 'SF Pro Display',
    fontWeight: '300',
    letterSpacing: 0.1 * unit,
    color: colors.white.base,
    fontSize: 1.25 * unit,
    color: colors.white.base,
  },
  activeItem: {
    fontFamily: 'SF Pro Display',
    fontSize: 2 * unit,
    fontWeight: '600',
    color: colors.green.base,
  },
})

export class VideoListItem extends Component {
  static defaultProps = {
    title: 'Default Audio Item Title',
    subTitle: '1:20:12',
    active: false,
  }

  render() {
    const {title, subTitle, active, image} = this.props
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 20 * unit,
            height: 11 * unit,
          }}
          source={image}
        />
        <View style={styles.labelContainer}>
          <Text
            numberOfLines={2}
            style={[active ? styles.activeItem : styles.textMain]}
          >
            {title}
          </Text>
          <Text style={styles.duration}>{subTitle}</Text>
        </View>
        <View style={{justifyContent: 'center', padding: unit}}>
          <MoreIcon size={icon.xs} />
        </View>
      </View>
    )
  }
}
export default VideoListItem
