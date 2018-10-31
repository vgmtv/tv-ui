import React, {Component} from 'react'
import {View, StyleSheet} from 'react-primitives'
import ListItem from '../ListItem'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
})

export class RecentPlaylist extends Component {
  static defaultProps = {
    list: [],
  }
  render() {
    const {list} = this.props
    const listItems = list.map(item => (
      <ListItem
        key={item.id}
        title={item.title}
        isVideo={Math.round(Math.random() * 100) < 10}
      />
    ))
    return <View style={styles.container}>{listItems}</View>
  }
}
export default RecentPlaylist
