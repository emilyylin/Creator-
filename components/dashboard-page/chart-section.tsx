import React from "react";
import { TouchableOpacity } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Chart from "./chart";
import SelectDropdown from 'react-native-select-dropdown';
import SummarySection from "./summary-section";
import ViewsSection from "./views-section";

import styles from "../../assets/styles/dashboard-style";

import { Text, View } from "../Themed";

const chartSection = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isRevenue, setRevenue] = useState(false);
  const toggleVOR = () => setRevenue((previousState) => !previousState);

  const [isSwitchSites, setSwitchSites] = useState(true);
    
  const sites= ["All", "Youtube", "Twitch", "TikTok"];

  let chart, datatype, summaryOrView;
  if (isRevenue && !isEnabled) {
    datatype = "Revenue"
    summaryOrView=<SummarySection
    totalearnings="55,565.40"
    time="last week"
    dollarchange="535.50"
  />
    chart = 
    <Chart
      yaxisLabel="$"
      data={{
        labels: ["Jan", "Mar", "May", "Jul", "Sept", "Nov"],
        datasets: [
          {
            data: [Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              (Math.random() * 100) +100],
          },
        ],
      }}
    />
  } else if (isRevenue && isEnabled) {
    datatype = "Revenue"
    summaryOrView=<SummarySection
    totalearnings="3,565.40"
    time="last week"
    dollarchange="535.50"
  />
    chart = <Chart 
    yaxisLabel="$"
    data={{
    labels: ["0", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        data: [Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          (Math.random() * 10) +15],
      },
    ],
  }}/>
  } else if (!isRevenue && isEnabled) {
    datatype="Views"
    summaryOrView=<ViewsSection totalviews="5.1M" time="last year" viewchange="200k" />
    chart = <Chart 
    yaxisLabel=""
    data={{
    labels: ["0", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        data: [Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          (Math.random() * 10) +15],
      },
    ],
  }}/>
  } else {
    datatype="Views"
    summaryOrView=<ViewsSection totalviews="5.1M" time="last year" viewchange="200k" />
    chart = <Chart 
          yaxisLabel=""
          data={{
          labels: ["Jan", "Mar", "May", "Jul", "Sept", "Nov"],
          datasets: [
            {
              data: [Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                (Math.random() * 100) +100],
            },
          ],
        }}/>
  }
  return (
    <View>
      {summaryOrView}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "left" }}>
          <Text style={{ fontWeight: "700", fontSize: 20 }}>November</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: "600", fontSize: 15, paddingRight: 5 }}>
              {datatype}
            </Text>
            <TouchableOpacity onPress={toggleVOR}>
              <MaterialIcons name="compare-arrows" size={20} color="#18D89F" />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={{ position: "absolute", right: 10, flexDirection:"col", alignItems:"flex-end"}}>
          <ToggleSwitch
            isOn={isEnabled}
            onColor="black"
            offColor="black"
            label={isEnabled ? "Month" : "Year"}
            labelStyle={{ color: "black", fontWeight: "400" }}
            size="small"
            onToggle={toggleSwitch}
          />
          <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
          <SelectDropdown
            data={sites}
            defaultValue="All"
            buttonStyle={styles.siteDropDown}
            buttonTextStyle={styles.siteDropDownText}
            rowTextStyle={styles.rowTextStyle}
            rowStyle={styles.rowStyle}
            onSelect={(selectedItem, index) => {
              setSwitchSites((previousState) => !previousState)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }} />
        <MaterialIcons name="sort" size={20} color="black" />
        </TouchableOpacity>
        </View>
      </View>
      {chart}

    </View>
  );
};
export default chartSection;
