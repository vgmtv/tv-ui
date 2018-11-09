import React, {Component} from 'react'
import {View, StyleSheet} from 'react-primitives'
import {design} from '@vgm/design-specs'
import VideoTopic from '../VideoTopic'

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

export class VideoTopicList extends Component {
  static defaultProps = {
    list: [],
    vGap: 2 * unit,
  }
  render() {
    const {list, vGap} = this.props
    const defaultGaps = {
      marginBottom: vGap,
      marginTop: vGap,
    }
    const listItems = list.map((topicData, index) => (
      <VideoTopic
        key={index}
        style={defaultGaps}
        mainTitle={topicData.name}
        subTitle={`${topicData.count} mục`}
      />
    ))
    return <View style={styles.container}>{listItems}</View>
  }
}

export default VideoTopicList
