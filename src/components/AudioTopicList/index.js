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

  // state = {
  //   activeItemIndex: 0,
  //   totalItems: 0,
  // }

  // nextItem = () => {
  //   this.setState(({list, activeItemIndex}) => {
  //     const newIndex =
  //       activeItemIndex < list.length - 1 ? activeItemIndex + 1 : 0
  //     return {activeItemIndex: newIndex}
  //   })
  // }

  render() {
    // const {activeItemIndex} = this.state
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
        // active={activeItemIndex === index}
        // isVideo={Math.round(Math.random() * 100) < 10}
      />
    ))

    return (
      <View>
        <View style={styles.container}>{listItems}</View>
        {/* <Touchable onPress={this.nextItem}>
          <View>
            <Text>Next</Text>
          </View>
        </Touchable> */}
      </View>
    )
  }
}

export default AudioTopicList
