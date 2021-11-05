import * as React from "react";
import { useState } from "react";
import { StyleSheet, ScrollView, Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import ChartSection from "../components/dashboard-page/chart-section";
import ActivitySection from "../components/dashboard-page/activity-section";
import SummarySection from "../components/dashboard-page/summary-section";
import ViewsSection from "../components/dashboard-page/views-section";
import IncomeSection from "../components/dashboard-page/income-section";
import StatsSection from "../components/dashboard-page/stats-section";

export default function DashboardScreen({
  navigation,
}: RootTabScreenProps<"Dashboard">) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 25, paddingRight: 20 }}>
            Welcome, Olivia
          </Text>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/images/profile-images/olivia.png")}
          />
        </View>
        <ChartSection />
        <ActivitySection />
        <StatsSection />
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
