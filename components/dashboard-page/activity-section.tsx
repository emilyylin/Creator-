import React from "react";
import { StyleSheet, Dimensions, Switch, Image } from "react-native";
import styles from "../../assets/styles/dashboard-style";
import SelectDropdown from "react-native-select-dropdown";

import Activity from "./activity";
import { Text, View } from "../Themed";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const activitySection = () => {
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
        <Text style={styles.title}>Activity</Text>
        <SelectDropdown
          data={months}
          // defaultValueByIndex={1}
          defaultValue={"Nov"}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
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
        posts="17"
        views="600k"
        income="600.20"
        percent="5.0"
        imgpath={require("../../assets/images/profile-images/tiktok.png")}
      />
      <Activity
        name="Twitch.tv"
        posts="10"
        views="35k"
        income="915"
        percent="2.0"
        imgpath={require("../../assets/images/profile-images/twitch.png")}
      />
      <Activity
        name="Youtube"
        posts="5"
        views="550k"
        income="2,050.20"
        percent="12.0"
        imgpath={require("../../assets/images/profile-images/youtube.png")}
      />
    </View>
  );
};
export default activitySection;
