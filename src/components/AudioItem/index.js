import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-primitives";
import { design } from "@vgm/design-specs";

const {
  size: { unit },
  colors
} = design;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 6 * unit,
    padding: 0.5 * unit
  },
  containerBg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 6 * unit,
    padding: 0.5 * unit,
    backgroundColor: colors.secondary.base
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: 5 * unit,
    paddingTop: 0.25 * unit,
    paddingBottom: 0.25 * unit,
    paddingLeft: 0.5 * unit
  },
  iconHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 0.5 * unit,
    marginRight: 0.25 * unit
  },
  textMain: {
    flex: 1,
    fontFamily: "SF Pro Display",
    fontWeight: "400",
    letterSpacing: 0.05 * unit,
    color: colors.white.base,
    fontSize: 1.75 * unit
  },
  textSub: {
    fontFamily: "SF Pro Display",
    fontWeight: "200",
    letterSpacing: 0.05 * unit,
    color: colors.white.base,
    fontSize: 1.25 * unit,
    color: colors.white.base
  },
  activeItem: {
    fontFamily: "SF Pro Display",
    fontWeight: "600",
    letterSpacing: 0.05 * unit,
    color: colors.green.base,
    fontSize: 1.75 * unit
  }
});

export class AudioItem extends Component {
  static defaultProps = {
    title: "Default Audio Item Title",
    subTitle: "This is where subtitle go!",
    active: false,
    bg: "blank",
    subIsOn: true
  };
  render() {
    const {
      title,
      subTitle,
      subIsOn,
      onPress,
      active,
      bg,
      style,
      ...props
    } = this.props;
    const presets = {
      blank: styles.container,
      color: styles.containerBg
    };

    return (
      <View style={[presets[bg], style]} {...props}>
        <View style={styles.content}>
          <Text
            numberOfLines={1}
            style={[active ? styles.activeItem : styles.textMain]}
          >
            {title}
          </Text>
          {subIsOn ? (
            <Text numberOfLines={1} style={styles.textSub}>
              {subTitle}
            </Text>
          ) : null}
        </View>
      </View>
    );
  }
}
export default AudioItem;
