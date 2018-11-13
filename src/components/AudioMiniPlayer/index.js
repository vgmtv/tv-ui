import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-primitives";
import { design } from "@vgm/design-specs";
import { PlayOverlayIcon, PauseIcon, NextIcon } from "@vgm/icons";

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
    height: 48
  },
  titleContainer: {
    flex: 1,
    paddingRight: 4
  },
  buttonContainer: {
    paddingRight: 8
  },
  title: {
    fontFamily: "SF Pro Display",
    fontWeight: "normal",
    fontSize: unit * 1.75,
    letterSpacing: 0.5,
    color: "white"
  }
});

export default class AudioMiniPlayer extends Component {
  static defaultProps = {
    title: "This is the title",
    isPlaying: true
  };
  render() {
    const { title, isPlaying } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>
        {isPlaying ? (
          <View style={styles.buttonContainer}>
            <PauseIcon size={icon.md} color={colors.white.base} />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <PlayOverlayIcon size={icon.md} color={colors.white.base} />
          </View>
        )}
          <NextIcon size={icon.sm} color={colors.white.base} />
      </View>
    );
  }
}
