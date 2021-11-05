import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import * as Progress from 'react-native-progress';


export default function CardScreen() {
  return (
    <View style={styles.container}>
    <Image source={require('../assets/images/card-images/CreatorCard.png')} /> 
    <Image source={require('../assets/images/card-images/perks.png')} />
    <Text style={styles.title}> Limit </Text>
    <Progress.Bar progress={0.3} width={200} />
    </View>
  );
}

const styles = StyleSheet.create({
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
