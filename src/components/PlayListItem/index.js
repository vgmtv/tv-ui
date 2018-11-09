import React, {Component} from 'react'
import {View, StyleSheet} from 'react-primitives'
import ListItem from '../ListItem'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
})

export class PlayListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListItem title={'Here I am to worship'} isVideo={true} />
      </View>
    )
  }
}

export default PlayListItem
