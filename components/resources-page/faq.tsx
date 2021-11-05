import React from "react";
import { StyleSheet, TouchableOpacity, Image, Linking } from "react-native";

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Text, View } from "../Themed";

const faq = (props) => {
  return (
    <View>
      <Collapse>
        <CollapseHeader>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              paddingBottom: 10,
              width: 300,
            }}
          >
            <Text style={{ textAlign: "left" }}> {props.question}</Text>
            <MaterialIcons
              style={{ position: "absolute", right: -40 }}
              name="keyboard-arrow-down"
              size={24}
              color="grey"
            />
          </View>
          <View
            style={{
              borderBottomColor: "#EDEDED",
              borderBottomWidth: 1,
              width: 325,
              marginLeft: 10,
            }}
          />
        </CollapseHeader>
        <CollapseBody>
          <Text
            style={{
              flexDirection: "row",
              padding: 10,
              marginLeft: 5,
              marginBottom: 10,
              textAlign: "left",
              width: 300,
              color: "grey",
            }}
          >
            {props.answer}
          </Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
};
export default faq;
