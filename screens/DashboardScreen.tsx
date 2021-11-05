import * as React from "react";
import { useState } from "react";
import { StyleSheet, Dimensions, Switch, Image } from "react-native";
// import { Switch } from 'react-native-switch';

import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { LineChart, ProgressChart } from "react-native-chart-kit";
import Chart from "../components/dashboard-page/chart.tsx";
import ActivitySection from "../components/dashboard-page/activity-section.tsx";

export default function DashboardScreen({
  navigation,
}: RootTabScreenProps<"Dashboard">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontWeight: "600", fontSize: 25, paddingRight: 20 }}>
          Welcome, Olivia
        </Text>
        <Image source={require("../assets/images/profile-images/olivia.png")} />
      </View>

      <Text style={{ fontWeight: "400", fontSize: 12 }}>Your Summary</Text>
      <Text style={{ fontWeight: "700", fontSize: 40 }}>$3,565.40</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Entypo name="triangle-up" size={12} color="#35B234" />
        <Text style={{ fontWeight: "400", fontSize: 12, color: "#35B234" }}>
          up $532.50 iin the last week
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "left" }}>
          <Text style={{ fontWeight: "700", fontSize: 20 }}>November</Text>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>Revenue</Text>
        </View>

        <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ position: "absolute", right: 10 }}
        />
      </View>
      <Chart
        data={{
          labels: ["Jan", "Mar", "May", "Jul", "Sept", "Nov"],
          datasets: [
            {
              data: [0, 8, 6, 13, 15, 13, 14, 13, 18],
            },
          ],
        }}
      />

      <ActivitySection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
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
