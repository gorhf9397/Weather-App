import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"
// expo statusBar 와 reactNative statusBar 가 따로 있는 이유
// expo 가 reactNative api들을 복사하고 개선하기를 결정 했기 때문  

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>안녕하세요</Text>
      <StatusBar style="auto" />
      {/* 스마트폰 상단바에 해당하는 StatusBar */}
    </View>
  );
}

const styles = StyleSheet.create({
  // style이 object 형태 StyleSheet.create 형태를 사용하면 자동완성기능 으로 편하게 사용가능
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
  },
});
