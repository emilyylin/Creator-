import React from "react";
import { StyleSheet, Dimensions, Switch, Image } from "react-native";
import styles from "../../assets/styles/dashboard-style";

import { Entypo } from "@expo/vector-icons";
import { Text, View } from "../Themed";

const income = (props) => {
  return (
    <View style={styles.activityContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={{ width: 40, height: 40 }} source={props.imgpath} />

        <View style={{ flexDirection: "column", paddingLeft: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>{props.name}</Text>
          <Text
            style={{ fontSize: 12, fontWeight: "normal", paddingRight: 20 }}
          >
            paid on {props.date}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            position: "absolute",
            right: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", right: 0 }}>
            +${props.income}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "normal" }}>deposited</Text>
        </View>
      </View>
      <View style={styles.activityUnderline} />
    </View>
  );
};
export default income;
