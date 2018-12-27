import React, {Component} from 'react'
import {View, StyleSheet} from 'react-primitives'
import {design} from '@vgm/design-specs'
import AudioTopic from '../AudioTopic'

const {
  size: {unit},
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
})

export class AudioTopicList extends Component {
  static defaultProps = {
    list: [],
    vGap: unit,
  }

  render() {
    const {list, vGap} = this.props
    const defaultGap = {
      marginBottom: vGap,
      marginTop: vGap,
    }
    const listItems = list.map((item, index) => (
      <AudioTopic
        key={index}
        style={defaultGap}
        mainTitle={item.title}
        subTitle={item.subTitle}
      />
    ))

    return (
      <View>
        <View style={styles.container}>{listItems}</View>
      </View>
    )
  }
}

export default AudioTopicList
