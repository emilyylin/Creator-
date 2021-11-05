import React from "react";
import { Dimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";

import { View } from "../Themed";

const chart = (props) => {
  return (
    <View>
      <LineChart
        data={props.data}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel={props.yaxisLabel}
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
          marginLeft: -10,
        }}
      />
    </View>
  );
};
export default chart;
