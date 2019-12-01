import React from "react";
import { Component } from "react";
import ImageMapper from "react-native-image-mapper";
import { MAPPING } from "./constants/buttonMapping";
import { Dimensions } from "react-native";

const imageSource = require("./assets/MFD example 2.PNG");

export default class ScreenComponent extends Component {
  render() {
    let { width, height } = Dimensions.get("window");
    let imgHeight = height;
    let imgWidth = width / 2;
    return (
      <ImageMapper
        imgHeight={imgHeight}
        imgWidth={imgWidth}
        imgSource={imageSource}
        imgMap={MAPPING(imgWidth, imgHeight)}
        onPress={(item, idx, event) => this.onAnyAreaPress(item, idx, event)}
        selectedAreaId="1"
        containerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      />
    );
  }
  onAnyAreaPress(item: any, idx: any, event: any) {
    throw new Error("Method not implemented.");
  }
}
