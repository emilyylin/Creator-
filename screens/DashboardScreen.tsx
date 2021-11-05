import * as React from "react";
import { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import ChartSection from "../components/dashboard-page/chart-section";
import ActivitySection from "../components/dashboard-page/activity-section";
import SummarySection from "../components/dashboard-page/summary-section";
import IncomeSection from "../components/dashboard-page/income-section";

export default function DashboardScreen({
  navigation,
}: RootTabScreenProps<"Dashboard">) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <SummarySection />
        <ChartSection />
        <ActivitySection />
        <IncomeSection />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
