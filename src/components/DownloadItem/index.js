import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-primitives";
import { design } from "@vgm/design-specs";
import { TickIcon, TrashIcon } from "@vgm/icons";

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
    paddingLeft: 4,
    paddingRight: 4
  },
  titleContainer: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8
  },
  title: {
    fontFamily: "SF Pro Display",
    fontWeight: "normal",
    fontSize: unit * 1.5,
    letterSpacing: 0.5,
    color: "white"
  },
  dot: {
    justifyContent: "center",
    alignItems: "center"
  },
  outerCircle: {
    borderWidth: 2,
    borderRadius: 32,
    width: 24,
    height: 24,
    borderColor: colors.white.alt
  },
  innerDot: {
    position: "absolute",
    borderWidth: 8,
    borderRadius: 12,
    width: 12,
    height: 12,
    borderColor: colors.green.base
  }
});

export default class DownloadItem extends Component {
  static defaultProps = {
    title:
      "This is the title and it is kind of long but it's meaningless and useless",
    selected: true
  };
  render() {
    const { title, selected, style } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.dot}>
          <View style={styles.outerCircle} />
          {selected ? <View style={styles.innerDot} /> : null}
        </View>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
        <TrashIcon size={icon.sm} color={colors.white.base} />
      </View>
    );
  }
}
