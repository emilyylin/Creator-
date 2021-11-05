import * as React from "react";
import { StyleSheet, Image, TouchableOpacity, Linking } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import ChannelSection from "../components/profile-page/channel-section";

import { AntDesign } from "@expo/vector-icons";

export default function ProfileScreen({
  navigation,
}: RootTabScreenProps<"Profile">) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", position: "absolute", top: 50 }}>
        <View style={{ paddingRight: 50 }}>
          <Text style={styles.creatorName}>Olivia Franz</Text>
          <Text>101k total followers</Text>
          <Text style={{ paddingTop: 10 }}>Content creator since 2019</Text>
          <Text>Member since 2021</Text>
        </View>
        <Image
          source={require("../assets/images/profile-images/settings.png")}
        />
      </View>

      <ChannelSection />
      <View style={{ alignSelf: "flex-end", paddingTop: 10, paddingRight: 20 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Modal")}
        >
          <AntDesign name="adduser" size={24} color="#18D89F" />
          <Text style={styles.buttonText}> Add a Channel </Text>
        </TouchableOpacity>
      </View>

      <View style={{ position: "absolute", bottom: 50, alignItems: "center" }}>
        <TouchableOpacity><Text style={{ paddingBottom: 20 }}>Remove a Channel</Text></TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("Main")}><Text style={{ fontWeight: "normal", fontSize: 12, color: "red" }}>
          Logout
        </Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: 150,
  },
  buttonText: {
    fontWeight: "500",
  },
  creatorName: {
    fontWeight: "600",
    fontSize: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
