import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "white",
    paddingRight: 170,
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
  siteDropDown:{
    width:90,
    height:30,
    backgroundColor:"white"
  },
  siteDropDownText:{
    color: "#18D89F",
    textAlign: "right",
    fontSize:13,
  },
  rowTextStyle:{
    fontSize:13,
    textAlign:"right",
  },
  rowStyle:{
    width:80,
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "#18D89F",
    fontWeight: "bold",
    textAlign: "right",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
