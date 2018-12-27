import React, { Component } from "react";
import { View, StyleSheet } from "react-primitives";
import VideoListItem from "../VideoListItem";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%"
  }
});

export class VideoItemList extends Component {
  static defaultProps = {
    title: "How Great Thou Art",
    duration: "1:20:12",
    list: []
  };
  state = {
    activeItemIndex: 0
  };
  render() {
    const { activeItemIndex } = this.state;
    const { list } = this.props;
    const listItems = list.map((item, index) => (
      <VideoListItem
        key={item.id}
        title={item.title}
        subTitle={item.subTitle}
        image={item.image}
        active={activeItemIndex === index}
      />
    ));
    return <View style={styles.container}>{listItems}</View>;
  }
}

export default VideoItemList;
