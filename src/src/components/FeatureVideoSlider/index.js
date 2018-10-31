import React, {Component} from 'react'
import {StyleSheet, Platform} from 'react-primitives'
import {HorizontalSlider} from '@a7/cuoi'
import {design} from '@vgm/constant'
import VideoItem from '../VideoItem'

const {
  size: {unit},
} = design

let overflow = {}
if (Platform.OS === 'android' || Platform.OS === 'ios') {
  overflow = {overflow: 'hidden'}
} else {
  overflow = {overflowX: 'auto'}
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    ...overflow,
  },
})

export class FeatureVideoSlider extends Component {
  static defaultProps = {
    onTopicPress: () => {},
    list: [],
    vGap: 0.5 * unit,
    hGap: 0.5 * unit,
    itemStyle: {},
  }
  notifyTopicPress = topicData => {
    this.props.onTopicPress(topicData)
  }
  render() {
    const {list, vGap, hGap, itemStyle, ...props} = this.props
    const defaultGaps = {
      marginTop: vGap,
      marginBottom: vGap,
      marginLeft: hGap / 2,
      marginRight: hGap / 2,
    }
    const items = list.map((item, index) => (
      <VideoItem
        key={index}
        style={[
          defaultGaps,
          index === 0
            ? {marginLeft: hGap}
            : index === list.length - 1
              ? {marginRight: hGap * 2}
              : null,
          itemStyle,
        ]}
        title={item.name}
        image={item.image}
        duration={item.duration}
        onPress={() => this.notifyTopicPress(item)}
      />
    ))
    return (
    <HorizontalSlider style={styles.container} {...props}>
      {items}
    </HorizontalSlider>
    )
  }
}

export default FeatureVideoSlider
