import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "white",
    paddingRight: 190,
    paddingTop: 20,
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "white",
    paddingRight: 160,
    paddingTop: 20,
  },
  transactionContainer: {
    paddingBottom: 10,
  },
  transactionUnderline: {
    paddingTop: 10,
    borderBottomColor: "#EDEDED",
    borderBottomWidth: 1,
    width: 350,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
  },
  textStyle: {
    color: "#18D89F",
    fontWeight: "bold",
    textAlign: "right",
    paddingTop: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
