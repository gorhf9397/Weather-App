import React from "react";
import { View } from "react-native";

export default function test() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
    </View>
    // width,height를 사용 하면 크기가 핸드폰 별로 다르기 때문에 flex 로 작업
  );
}
