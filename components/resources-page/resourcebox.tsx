import React from "react";
import { StyleSheet, TouchableOpacity, Image, Linking } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { Text, View } from "../Themed";

const resourcebox = (props) => {
    const onPress = () =>
    Linking.canOpenURL(
      props.url
    ).then(() => {
      Linking.openURL(
        props.url
      );
    });

  return (
    <View>
      <TouchableOpacity
       onPress={onPress}
        style={{
          backgroundColor: "#EDEDED",
          padding: 20,
          borderRadius: 13,
          margin: 5,
          height: 140,
          width: 160,
        }}
      >
        <Text
          style={{
            bottom: 15,
            right: 15,
            position: "absolute",
            fontWeight: "700",
            fontSize: 20,
            textAlign: "right",
          }}
        >
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default resourcebox;
