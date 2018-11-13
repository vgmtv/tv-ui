import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-primitives";
import { design } from "@vgm/design-specs";
import { PlayOverlayIcon, TrashIcon } from "@vgm/icons";

const {
  size: { unit, icon },
  colors
} = design;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 48,
  },
  titleContainer: {
    flex: 1,
    paddingLeft: 4,
    paddingRight: 4
  },
  title: {
    fontFamily: "SF Pro Display",
    fontWeight: "normal",
    fontSize: unit * 1.5,
    letterSpacing: 0.5,
    color: "white"
  }
});

export default class DownloadItem extends Component {
  static defaultProps = {
    title: "This is the title and it is kind of long but it's meaningless and useless"
  };
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <PlayOverlayIcon size={icon.sm} color={colors.white.base}/>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
        <TrashIcon size={icon.sm} color={colors.white.base}/>
      </View>
    );
  }
}
