import React from "react";
import { Image } from "react-native";

import { View } from "../Themed";

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
