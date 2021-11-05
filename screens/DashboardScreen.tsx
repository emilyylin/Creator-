import * as React from "react";
import { useState } from "react";
import { StyleSheet, Dimensions, Switch, Image } from "react-native";
// import { Switch } from 'react-native-switch';

import { Foundation } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { LineChart, ProgressChart } from "react-native-chart-kit";

export default function DashboardScreen({
  navigation,
}: RootTabScreenProps<"Dashboard">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Olivia</Text>
      <Image source={require("../assets/images/profile-images/olivia.png")} />
      <Text style={styles.title}>Your Summary</Text>
      <Text style={styles.title}>$3,565.40</Text>
      <Text style={styles.title}>November</Text>
      <Text style={styles.title}>Revenue</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <LineChart
        data={{
          labels: ["Jan", "Mar", "May", "Jul", "Sept", "Nov"],
          datasets: [
            {
              data: [0, 8, 6, 13, 15, 13, 14, 13, 18],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(24, 216, 159, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
