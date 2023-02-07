import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
// expo statusBar 와 reactNative statusBar 가 따로 있는 이유
// expo 가 reactNative api들을 복사하고 개선하기를 결정 했기 때문

// Dimentions 화면 크기를 알려주는 API https://reactnative.dev/docs/dimensions
const { width: SCREEN_WIDTH } = Dimensions.get("window");
// console.log(SCREEN_WIDTH);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      {/* reactNative는 components 이기 때문에 스크롤 을 사용하려면ScrollView 사용
      https://reactnative.dev/docs/scrollview horizontal 좌우 스크롤 
      pagingEnabled 스크롤 제한하며 페이지 생성 https://reactnative.dev/docs/scrollview#pagingenabled 
      showsHorizontalScrollIndicator 하단 스크롤바 숨김 https://reactnative.dev/docs/scrollview#showshorizontalscrollindicator*/}
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 58,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    fontSize: 168,
  },
  description: {
    fontSize: 60,
  },
});
