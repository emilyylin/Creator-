import React from "react";
import { useState } from "react";
import styles from "../../assets/styles/dashboard-style";
import SelectDropdown from "react-native-select-dropdown";

import Activity from "./activity";
import { Text, View } from "../Themed";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const activitySection = () => {
  const [isSwitchMonth, setNewMonth] = useState(false);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View style={{ paddingRight: 45 }}>
          <Text style={styles.title}>Activity</Text>
        </View>
        <SelectDropdown
          data={months}
          // defaultValueByIndex={1}
          defaultValue={"Nov"}
          onSelect={(selectedItem, index) => {
            setNewMonth((previousState) => !previousState);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={() => {
            return <FontAwesome name="chevron-down" color={"#444"} size={12} />;
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>

      <Activity
        name="TikTok"
        posts={Math.ceil(Math.random() * 10)}
        views="600k"
        income={Math.ceil(Math.random() * 500)}
        percent="5.0"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Activity
        name="Twitch.tv"
        posts={Math.ceil(Math.random() * 10)}
        views="35k"
        income={Math.ceil(Math.random() * 5000)}
        percent="2.0"
        imgpath={require("../../assets/images/profile-images/twitch.png")}
      />
      <Activity
        name="Youtube"
        posts={Math.ceil(Math.random() * 10)}
        views="550k"
        income={Math.ceil(Math.random() * 5000)}
        percent="12.0"
        imgpath={require("../../assets/images/profile-images/youtube.png")}
      />
    </View>
  );
};
export default activitySection;
