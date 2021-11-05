import React from "react";
import { StyleSheet, Dimensions, Switch, Image } from "react-native";
import styles from "../../assets/styles/dashboard-style";

import { LineChart, ProgressChart } from "react-native-chart-kit";

import { MaterialIcons } from "@expo/vector-icons";

import { Text, View } from "../Themed";

const incomeSection = (props) => {
  return (
    <View>
      <Text style={styles.title}>Recent Income</Text>
    </View>
  );
};
export default incomeSection;
