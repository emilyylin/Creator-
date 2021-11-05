import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import styles from "../../assets/styles/dashboard-style";

import { BarChart } from "react-native-chart-kit";

import { Text, View } from "../Themed";

const statsSection = () => {
  const data = {
    labels: ["Jan", "Apr", "Jun", "Oct"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={{ paddingTop: 30, paddingBottom: 20, paddingLeft: 20 }}>
      <Image
        source={require("../../assets/images/dashboard-images/stats.png")}
      />
    </View>
  );
};
export default statsSection;
