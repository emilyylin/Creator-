import React from "react";
import { TouchableOpacity } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Chart from "./chart";

import { Text, View } from "../Themed";

const chartSection = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isVOR, setVOR] = useState(false);
  const toggleVOR = () => setVOR((previousState) => !previousState);
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: "600", fontSize: 15, paddingRight: 5 }}>
              Revenue
            </Text>
            <TouchableOpacity onPress={toggleVOR}>
              <MaterialIcons name="compare-arrows" size={20} color="#18D89F" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: "absolute", right: 10 }}>
          <ToggleSwitch
            isOn={isEnabled}
            onColor="black"
            offColor="black"
            label={isEnabled ? "Month" : "Year"}
            labelStyle={{ color: "black", fontWeight: "400" }}
            size="small"
            onToggle={toggleSwitch}
          />
        </View>
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
