import * as React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";

export default function MainScreen({
  navigation,
}: RootTabScreenProps<"Main">) {
  return (
    <View style={styles.container}>
      <Image source={require("tdhackweek/assets/images/CreatorPlus.png")} />
    </View>
  );
}

const height = (Dimensions.get("window").height)/2 - 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent:"center",
    paddingBottom:120
  }
});
