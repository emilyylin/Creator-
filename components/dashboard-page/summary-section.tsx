import React from "react";
import { Image } from "react-native";

import { Entypo } from "@expo/vector-icons";

import { Text, View } from "../Themed";

const summarySection = (props) => {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontWeight: "600", fontSize: 25, paddingRight: 20 }}>
          Welcome, Olivia
        </Text>
        <Image
          source={require("../../assets/images/profile-images/olivia.png")}
        />
      </View>

      <Text style={{ fontWeight: "400", fontSize: 12 }}>Your Summary</Text>
      <Text style={{ fontWeight: "700", fontSize: 40 }}>$3,565.40</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Entypo name="triangle-up" size={12} color="#35B234" />
        <Text style={{ fontWeight: "400", fontSize: 12, color: "#35B234" }}>
          up $532.50 iin the last week
        </Text>
      </View>
    </View>
  );
};
export default summarySection;
