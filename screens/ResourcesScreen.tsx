import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, Linking } from "react-native";

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import { MaterialIcons } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import iconSet from "@expo/vector-icons/build/Fontisto";

import FAQ from "../components/resources-page/faq";
import ResourceBox from "../components/resources-page/resourcebox";
export default function ResourcesScreen({
  navigation,
}: RootTabScreenProps<"Resources">) {
  const [count, setCount] = useState(0);
  const onPress = () =>
    Linking.canOpenURL(
      "https://www.td.com/ca/en/personal-banking/book-appointment/#/appointment-type"
    ).then(() => {
      Linking.openURL(
        "https://www.td.com/ca/en/personal-banking/book-appointment/#/appointment-type"
      );
    });

  return (
      <>
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <ResourceBox name="Loans" url="https://www.td.com/ca/en/personal-banking/how-to/borrowing/compare-loans-and-lines-of-credit/?tdtab=1&cm_sp=:GOOGLE:EN+-+Line+of+Credit+-+Brand+(22_S_PL_LUC_AO_ACQ_ENFR_NAT):DIF:Line+of+Credit+-+BR+-+Exact&gclid=CjwKCAjwiY6MBhBqEiwARFSCPnH4qAIUcYYla9JMIkscQOC193VXmc2S8Gl2fv2Db_70L8PCkgFgxxoC_NoQAvD_BwE&gclsrc=aw.ds" />
        <ResourceBox name="Invest" url="https://www.td.com/ca/en/investing/"/>
      </View>
      <View style={{ flexDirection: "row" }}>
        <ResourceBox name="Line of Credit" url="https://www.td.com/ca/en/personal-banking/how-to/borrowing/compare-loans-and-lines-of-credit/?tdtab=1&cm_sp=:GOOGLE:EN+-+Line+of+Credit+-+Brand+(22_S_PL_LUC_AO_ACQ_ENFR_NAT):DIF:Line+of+Credit+-+BR+-+Exact&gclid=CjwKCAjwiY6MBhBqEiwARFSCPnH4qAIUcYYla9JMIkscQOC193VXmc2S8Gl2fv2Db_70L8PCkgFgxxoC_NoQAvD_BwE&gclsrc=aw.ds"/>
        <ResourceBox name="Mortgage" url="https://www.td.com/ca/en/personal-banking/products/mortgages/first-time-home-buyer/pre-approval/?GOOGLE&Mortgage+-+Brand+-+English+(22_S_RL_RMO_AO_ACQ_ENFR)&Mortgage+Core+-+Brand+-+Exact&ds_rl=1265821&ds_rl=1266773&ds_rl=1265821&gclid=CjwKCAjwiY6MBhBqEiwARFSCPoef7clFf-h3xu7SWtyCY99-LiOir3KlzNB31vuvtTPbj8FkQW5KGRoCLOkQAvD_BwE&gclsrc=aw.ds"/>
      </View>
    </View>

      <Text style={styles.title}> FAQ </Text>
    <View style={styles.container}>
        <FAQ
          question="How can I apply for a loan online?"
          answer="You don't You don't You don't You don't"
        />
        <FAQ
          question="What is the best way to gain credit?"
          answer="You don't You don't You don't You don't"
        />
        <FAQ
          question="What options do I have for a line of credit?"
          answer="You don't You don't You don't You don't"
        />
        <FAQ
          question="Should I have a consistent post schedule?"
          answer="You don't You don't You don't You don't"
        />
        <FAQ
          question="How does engagement affect cashback?"
          answer="You don't You don't You don't You don't"
        />

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <MaterialIcons name="chat" size={24} color="#18D89F" />
        <Text style={styles.buttonText}> Book an Appointment </Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: 20,
    paddingLeft: 40,
    backgroundColor:"white"
  },
  resourcesBox: {
    backgroundColor: "#EDEDED",
    flex: 0.4,
    padding: 20,
    borderRadius: 13,
    margin: 5,
    height: 140,
    width: 160,
  },
  resourcesBoxText: {
    bottom: 15,
    right: 15,
    position: "absolute",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "right",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 30,
    borderColor: "#EDEDED",
    borderStyle: "solid",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: 250,
    marginTop: 30,
  },
  buttonText: {
    fontWeight: "500",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
