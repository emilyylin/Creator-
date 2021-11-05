import React from "react";
import {useEffect, useState} from "react";
import { Image } from "react-native";

import { Entypo } from "@expo/vector-icons";

import { Text, View } from "../Themed";

const summarySection = (props) => {
  return (
    <View>
      <Text style={{ fontWeight: "400", fontSize: 12 }}>Your Summary</Text>
      <Text style={{ fontWeight: "700", fontSize: 40}}>
        ${props.totalearnings}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <Entypo name="triangle-up" size={12} color="#35B234" />
        <Text style={{ fontWeight: "400", fontSize: 12, color: "#35B234"}}>
          up ${props.dollarchange} in the {props.time}
        </Text>
      </View>
    </View>
  );
};
export default summarySection;
