import * as React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import iconSet from '@expo/vector-icons/build/Fontisto';

export default function ResourcesScreen({ navigation }: RootTabScreenProps<'Resources'>) {

    const [count, setCount] = useState(0);
    const onPress = () => Linking.canOpenURL("https://www.td.com/ca/en/personal-banking/book-appointment/#/appointment-type").then(() => {
        Linking.openURL("https://www.td.com/ca/en/personal-banking/book-appointment/#/appointment-type");
    });



  return (
    <View style={styles.container}>

        <View style={{flexDirection: "row"}}>
            <View style={styles.resourcesBox}>
                <Text style={styles.resourcesBoxText}> Loans </Text>
            </View>
            <View style={styles.resourcesBox}>
                <Text style={styles.resourcesBoxText}> Invest </Text>
            </View>
        </View>
        <View style={{flexDirection: "row"}}>
            <View style={styles.resourcesBox}>
                <Text style={styles.resourcesBoxText}> Line of Credit </Text>
            </View>
            <View style={styles.resourcesBox}>
                <Text style={styles.resourcesBoxText}> Mortgage </Text>
            </View>
        </View>
        
        <Collapse>
            <CollapseHeader>
                <View style={styles.faqQuestion}>
                    <Text>How can I apply for a loan online?</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="grey" />
                </View>
            </CollapseHeader>
            <CollapseBody>
                <Text>Ta daa!</Text>
            </CollapseBody>
        </Collapse>


        <TouchableOpacity style={styles.button} onPress={onPress} >    
            <MaterialIcons name="chat" size={24} color="#18D89F"/>
            <Text style={styles.buttonText}>  Book an Appointment </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 faqQuestion: {
    flexDirection: "row",
    padding: 10,
    textAlign:"left"
 },
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "left"
  },
  resourcesBox: {
    backgroundColor: "#EDEDED",
    flex: 0.4,
    padding: 20,
    borderRadius: 13,
    margin: 5,
    height:140,
    width:160
  },
  resourcesBoxText: {
    bottom: 15,
    right: 15,
    position: "absolute",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "right"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 30,
    borderColor: "#EDEDED",
    borderStyle: "solid",
    borderWidth:1,
    flexDirection:"row",
    justifyContent: "center",
    width: 250,

  },
  buttonText: {
    fontWeight: "500"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
