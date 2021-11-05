import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "white",
    paddingRight: 215,
  },
  activityContainer: {
    paddingBottom: 10,
  },
  activityUnderline: {
    paddingTop: 10,
    borderBottomColor: "#EDEDED",
    borderBottomWidth: 1,
    width: 370,
  },
  dropdown1BtnStyle: {
    height: 25,
    width: 70,
    backgroundColor: "#FFF",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left", fontSize: 12 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});
