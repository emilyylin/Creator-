import React from "react";
import {useState} from "react";
import { TouchableOpacity, Alert, ScrollView, Modal} from "react-native";
import styles from "../../assets/styles/dashboard-style";

import Income from "./income";
import IncomeModal from "./income-modal"

import { Text, View } from "../Themed";

const incomeSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
        <ScrollView>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.title}>Recent Income</Text>
          <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
            <IncomeModal />
            </ScrollView>
        </View>

      </Modal>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Text style={styles.title}>Recent Income</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{ fontWeight: "normal", fontSize: 12 }}>See All</Text>
        </TouchableOpacity>
      </View>

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
    </View>
  );
};
export default incomeSection;
