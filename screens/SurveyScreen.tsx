import * as React from "react";
import { StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";

export default function SurveyScreen({
  navigation,
}: RootTabScreenProps<"Main">) {
  let nextCount=0;

  return (
    <View style={styles.container}>
        <View style={{alignItems:"center", flexDirection:"row"}}>
            
        <Image source={require("tdhackweek/assets/images/logo.png")} />
        <Text style={styles.title}>Let's get started!</Text>

        </View>
        <View style={styles.quizbox}>
        <TouchableOpacity style={styles.button}> 
        <Text>Next</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    quizbox:{
        backgroundColor: "white",
        shadowColor: "rgba(9, 30, 66, 0.31)",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
        height: 2,
        width: 2,
        },
        borderWidth:0.1,
        padding: 20,
        borderRadius: 13,
        margin: 20,
        height: 450,
        width: 350,
    },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent:"center",
    paddingBottom:120
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft:10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    position:"absolute",
    bottom:40,
    left: 100,
    padding: 10,
    borderRadius: 30,
    borderColor: "#EDEDED",
    borderStyle: "solid",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    width: 150,
    marginTop: 30,
  },
});
