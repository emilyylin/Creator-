import React from "react";
import { Image } from "react-native";
import styles from "../../assets/styles/profile-style";
import { Text, View } from "../Themed";

const channel = (props) => {
  return (
    <View style={styles.channelContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={{ width: 40, height: 40 }} source={props.imgpath} />

        <View style={{ flexDirection: "column", paddingLeft: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>{props.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{ fontSize: 12, fontWeight: "normal", paddingRight: 20 }}
            >
              {props.username}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "normal" }}>
              {props.followers} followers
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.channelUnderline} />
    </View>
  );
};
export default channel;
