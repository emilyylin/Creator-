import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { AntDesign } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Profile'>) {

  return (
    <View style={styles.container}>
        <View style ={{flexDirection:"row"}}>
            <View style={{paddingRight:50}}>
                <Text style={styles.creatorName}>Olivia Franz</Text>
                <Text >101k total followers</Text>
                <Text style={{paddingTop:10}}>Content creator since 2019</Text>
                <Text>Member since 2021</Text>
            </View>
            <Image source={require('../assets/images/profile-images/settings.png')} />
        </View>

        <Text style={styles.title}> Channels </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Modal')} >  
        <AntDesign name="adduser" size={24} color="#18D89F" />
            <Text style={styles.buttonText} > Add a Channel </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
        width: 200,
    
    },
    buttonText: {
        fontWeight: "500"
      },
  creatorName: {
    fontWeight:"600",
    fontSize:15
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
