//Used to make components
import React from 'react';
//Shows content on mobile device
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const myName = 'Dylan';
    return(
      <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.subHeadingStyle}>My name is {myName}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeadingStyle: {
    fontSize: 20
  }
});


export default ComponentsScreen;
