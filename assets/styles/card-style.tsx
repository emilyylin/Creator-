import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "white",
    paddingRight: 170,
    paddingTop: 20,
    paddingBottom: 10,
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
    width: 300,
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
  limitBox: {
    backgroundColor: "#EDEDED",
    marginBottom: 0,
    padding: 20,
    borderRadius: 13,
    margin: 5,
    height: 105,
    width: 335,
  },
});
