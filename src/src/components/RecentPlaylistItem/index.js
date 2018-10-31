import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import ListItem from '../ListItem'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
})

export class RecentPlaylistItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListItem title={'Here I am to worship'} isVideo={true} />
      </View>
    )
  }
}

export default RecentPlaylistItem
