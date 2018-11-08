import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {design} from '@vgm/constant'
import {VideoIcon, MusicIcon, PlaylistIcon} from '@vgm/icons'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 6 * unit,
    borderBottomWidth: 0.0625 * unit,
    borderColor: colors.white.alt,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: unit,
  },
  title: {
    display: 'flex',
    flex: 1,
    padding: unit,
  },
  font: {
    fontFamily: 'SF Pro Display',
    fontWeight: '100',
    fontSize: 2 * unit,
    letterSpacing: 0.15 * unit,
    color: colors.white.base,
  },
  activeItem: {
    fontWeight: '400',
    color: colors.green.base
  },
})

export class ListItem extends Component {
  static defaultProps = {
    title: 'Default rencent search title',
    isVideo: false,
    isTopic: false,
    active: false,
  }
  render() {
    const {title, isVideo, isTopic, active} = this.props
    return (
        <View style={styles.container}>
          <View style={styles.icon}>
            {!isTopic ? (
              isVideo ? (
                <VideoIcon size={icon.sm} />
              ) : (
                <MusicIcon size={icon.sm} />
              )
            ) : (
              <PlaylistIcon size={icon.sm} />
            )}
          </View>
          <View style={styles.title}>
            <Text
              numberOfLines={1}
              style={[styles.font, active ? styles.activeItem : null]}
            >
              {title}
            </Text>
          </View>
        </View>
    )
  }
}

export default ListItem
