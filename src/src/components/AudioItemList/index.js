import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {design} from '@vgm/constant'
import AudioItem from '../AudioItem'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: colors.black.base,
  },
})

export class AudioItemList extends Component {
  static defaultProps = {
    list: [],
  }
  state = {
    activeItemIndex: 0,
  }
  render() {
    const {activeItemIndex} = this.state
    const {list} = this.props
    const listItems = list.map((item, index) => (
      <AudioItem
        key={item.id}
        title={item.title}
        subTitle={item.subTitle}
        active={activeItemIndex === index}
      />
    ))
    return <View style={styles.container}>{listItems}</View>
  }
}

export default AudioItemList
