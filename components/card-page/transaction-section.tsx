import React from "react";
import styles from "../../assets/styles/card-style";
import { useState } from "react";
import { TouchableOpacity, Alert, ScrollView, Modal } from "react-native";
import Transaction from "./transaction";
import TransactionModal from "./transaction-modal";
import { Text, View } from "../Themed";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const transactionSection = () => {
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
              <Text style={styles.modalTitle}>Transactions</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
            <TransactionModal />
          </ScrollView>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text style={styles.title}>Transactions</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{ fontWeight: "normal", fontSize: 12 }}>See All</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome5
          name="uber"
          size={24}
          color="black"
          style={{ paddingBottom: 15 }}
        />
        <Transaction
          name="UBER"
          date="Nov 1st"
          time="5:05 pm"
          purchase="35.09"
          type="purchase"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons
          name="cafe"
          size={24}
          color="black"
          style={{ paddingBottom: 15 }}
        />
        <Transaction
          name="KIND CAFE"
          date="Nov 1st"
          time="11:00 am"
          purchase="29.99"
          type="purchase"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons
          name="cafe"
          size={24}
          color="black"
          style={{ paddingBottom: 15 }}
        />
        <Transaction
          name="KIND CAFE"
          date="Nov 1st"
          time="11:00 am"
          purchase="29.99"
          type="purchase"
        />
      </View>
    </View>
  );
};
export default transactionSection;
