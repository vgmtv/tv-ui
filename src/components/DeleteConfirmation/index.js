import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-primitives";
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
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(200,200,200,0.6)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: unit * 45,
    height: unit * 20
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontFamily: "SF Pro Display",
    fontWeight: "500",
    fontSize: unit * 2.5,
    letterSpacing: 0.5,
    color: colors.white.base,
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: unit * 45,
    height: unit * 6
  },
  leftButton: {
    borderRightWidth: 1,
    borderColor: "rgba(160,160,160,1)",
    height: unit * 6,
    width: unit * 22.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(200,200,200,0.6)"
  },
  rightButton: {
    height: unit * 6,
    width: unit * 22.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(200,200,200,0.6)"
  },
  buttonTextLeft: {
    fontFamily: "SF Pro Display",
    fontWeight: "bold",
    fontSize: unit * 2.5,
    letterSpacing: 0.5,
    color: "rgb(0,122,255)"
  },
  buttonTextRight: {
    fontFamily: "SF Pro Display",
    fontWeight: "400",
    fontSize: unit * 2.5,
    letterSpacing: 0.5,
    color: colors.red.base
  }
});

export default class DeleteConfirmation extends Component {
  static defaultProps = {
    title: "Có phải bạn muốn xóa tập tin này?"
  };
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.leftButton}>
            <Text style={styles.buttonTextLeft}>Hủy bỏ</Text>
          </View>
          <View style={styles.rightButton}>
            <Text style={styles.buttonTextRight}>Đồng ý</Text>
          </View>
        </View>
      </View>
    );
  }
}
