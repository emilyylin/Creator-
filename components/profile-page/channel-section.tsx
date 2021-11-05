import React from "react";
import styles from "../../assets/styles/profile-style";

import Channel from "./channel";
import { Text, View } from "../Themed";

const channelSection = () => {
  return (
    <View>
      <Text style={styles.title}>Channels </Text>
      <Channel
        name="TikTok"
        username="olivia_xo"
        followers="50k"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Channel
        name="Twitch.tv"
        username="olivia_xo"
        followers="10k"
        imgpath={require("../../assets/images/profile-images/twitch.png")}
      />
      <Channel
        name="Youtube"
        username="olivia_xo"
        followers="41k"
        imgpath={require("../../assets/images/profile-images/youtube.png")}
      />
    </View>
  );
};
export default channelSection;
