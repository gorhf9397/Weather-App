import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
// expo statusBar 와 reactNative statusBar 가 따로 있는 이유
// expo 가 reactNative api들을 복사하고 개선하기를 결정 했기 때문
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

// Dimentions 화면 크기를 알려주는 API https://reactnative.dev/docs/dimensions
const { width: SCREEN_WIDTH } = Dimensions.get("window");
// console.log(SCREEN_WIDTH);
const API_KEY = "5044bd9e7f09bce577e61eea0811b2a4";

const icons = {
  Clear: "day-sunny",
  Clouds: "cloudy",
  Rain: "rain",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Drizzle: "day-rain",
  Tuunderstorm: "lightning",
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    // console.log(permission);
    if (!granted) {
      setOk(false);
    }
    const {
      // 유저의 지리 좌표
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      // 위도와 경도로 주소를 알려줌
      // 유저의 위치 구역명
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={alerts}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };
  const today = new Date();
  // 위치 정보 expoLocation
  // https://docs.expo.dev/versions/v47.0.0/sdk/location/#locationrequestpermissionsasync
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      {/* reactNative는 components 이기 때문에 스크롤 을 사용하려면ScrollView 사용
      https://reactnative.dev/docs/scrollview horizontal 좌우 스크롤 
      pagingEnabled 스크롤 제한하며 페이지 생성 https://reactnative.dev/docs/scrollview#pagingenabled 
      showsHorizontalScrollIndicator 하단 스크롤바 숨김 https://reactnative.dev/docs/scrollview#showshorizontalscrollindicator*/}
      <Text style={styles.month}>
        {today.getDay() + " / " + today.getDate()}
      </Text>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color="white" size="large" />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Fontisto
                    name={icons[day.weather[0].main]}
                    size={50}
                    color="black"
                  />
                  <MaterialCommunityIcons
                    name="temperature-celsius"
                    size={50}
                    color="black"
                    style={{marginTop: 40}}
                  />
                </View>
              </View>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
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
    borderBottomWidth: 5,
    borderStyle: "dashed",
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
  tinyText: {
    fontSize: 20,
  },
  month: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
});
