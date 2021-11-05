import React from "react";
import styles from "../../assets/styles/card-style";

import { Text, View } from "../Themed";

const transaction = (props) => {
  return (
    <View style={styles.transactionContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "column", paddingLeft: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>{props.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{ fontSize: 12, fontWeight: "normal", paddingRight: 20 }}
            >
              {props.date}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "normal" }}>
              {props.time}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            position: "absolute",
            right: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", right: 0 }}>
            -${props.purchase}
          </Text>
          <View style={{ flexDirection: "row", right: 0 }}>
            <Text style={{ fontWeight: "400", fontSize: 12, color: "red" }}>
              {props.type}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.transactionUnderline} />
    </View>
  );
};
export default transaction;
