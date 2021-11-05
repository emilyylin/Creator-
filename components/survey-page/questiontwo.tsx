import React from "react";
import { StyleSheet, TouchableOpacity, Image, Linking } from "react-native";
import { RadioButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

import { Text, View } from "../Themed";
const [checked, setChecked] = React.useState("first");

const qtwo = () => {
  return (
    <View>
      <Text>shit</Text>
      <RadioButton
        value="A"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      />
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => setChecked("second")}
      />
    </View>
  );
};
export default qtwo;
