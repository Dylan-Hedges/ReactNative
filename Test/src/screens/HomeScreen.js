import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

//Renders content for this component - uses the navigation prop + string of the component name defined in App.js to show components
const HomeScreen = (props) => {
  return(
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
        />
        <Button
          onPress={()=> props.navigation.navigate('List')}
          title="Go to Lists Demo"
        />
        <Button
          onPress={()=> props.navigation.navigate('Image')}
          title="Go to Image Demo"
        />
        <Button
          onPress={()=> props.navigation.navigate('Counter')}
          title="Go to Counter Demo"
        />
        <Button
          onPress={()=> props.navigation.navigate('Color')}
          title="Go to Color Demo"
        />
        <Button
          onPress={()=> props.navigation.navigate('Square')}
          title="Go to Square Screen"
        />
        <Button
          onPress={()=> props.navigation.navigate('Text')}
          title="Go to Text Screen"
        />
        <Button
          onPress={()=> props.navigation.navigate('Box')}
          title="Go to Box Screen"
        />
    </View>
  )
};

//Creates styling for this component
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
