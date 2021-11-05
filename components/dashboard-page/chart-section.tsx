import React from "react";
import { Switch } from "react-native";
import { useState } from "react";

import Chart from "./chart";

import { Text, View } from "../Themed";

const chartSection = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
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
    </View>
  );
};
export default chartSection;
