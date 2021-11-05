import React from "react";
import { useState } from "react";
import {
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";

import { Text, View } from "../Themed";
import Income from "./income";

const incomeSection = () => {
  return (
    <View style={{ marginTop: 30, marginBottom: 30 }}>
      <Income
        name="Tiktok"
        date="Nov 1st"
        income="515.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Income
        name="Twitch"
        date="Nov 1st"
        income="400.00"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/twitch.png")}
      />
      <Income
        name="Youtube"
        date="Nov 1st"
        income="150.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/youtube.png")}
      />
      <Income
        name="Tiktok"
        date="Oct 30th"
        income="50.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Income
        name="Tiktok"
        date="Nov 1st"
        income="515.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Income
        name="Twitch"
        date="Nov 1st"
        income="400.00"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/twitch.png")}
      />
      <Income
        name="Youtube"
        date="Nov 1st"
        income="150.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/youtube.png")}
      />
      <Income
        name="Tiktok"
        date="Oct 30th"
        income="50.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Income
        name="Tiktok"
        date="Nov 1st"
        income="515.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Income
        name="Twitch"
        date="Nov 1st"
        income="400.00"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/twitch.png")}
      />
      <Income
        name="Youtube"
        date="Nov 1st"
        income="150.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/youtube.png")}
      />
      <Income
        name="Tiktok"
        date="Oct 30th"
        income="50.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Income
        name="Tiktok"
        date="Nov 1st"
        income="515.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Income
        name="Twitch"
        date="Nov 1st"
        income="400.00"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/twitch.png")}
      />
      <Income
        name="Tiktok"
        date="Nov 1st"
        income="515.50"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Income
        name="Twitch"
        date="Nov 1st"
        income="400.00"
        type="deposited"
        imgpath={require("../../assets/images/profile-images/twitch.png")}
      />
    </View>
  );
};
export default incomeSection;
