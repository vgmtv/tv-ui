import React, {Component} from 'react'
import {StyleSheet, View, Platform} from 'react-primitives'
import {HorizontalSlider} from '@vgm/primitives-ui'
import {design} from '@vgm/design-specs'
import AudioItem from '../AudioItem'

const {
  size: {unit},
  colors,
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
  content: {
    display: 'flex',
    alignItems: 'center',
    width: 9 * unit,
    height: 9 * unit,
  },
})

export class FeatureAudioSlider extends Component {
  static defaultProps = {
    list: [],
    vGap: 0.5 * unit,
    hGap: 0.5 * unit,
    itemStyle: {},
  }
  render() {
    const {list, vGap, hGap, ...props} = this.props
    const defaultGaps = {
      marginTop: vGap,
      marginBottom: vGap,
      marginLeft: hGap / 2,
      marginRight: hGap / 2,
    }
    const items = list.map((item, index) => (
      <AudioItem
        key={index}
        style={[
          styles.content,
          defaultGaps,
          index === 0
            ? {marginLeft: hGap}
            : index === list.length - 1
              ? {marginRight: hGap }
              : null,
        ]}
        title={item.title}
        subTitle={null}
        toggleIcon={false}
        bg="color"
      />
    ))
    return (
      <HorizontalSlider style={styles.container} {...props}>
        {items}
        <View style={{width: hGap / 2}} />
      </HorizontalSlider>
    )
  }
}

export default FeatureAudioSlider
