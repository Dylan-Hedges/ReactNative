import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
  //Initalises Functional Component state - stores colors
  const [colors, setColors] = useState([]);
  //Returns colors on screen - [...colors, randomRgb()] takes a copy of the colors array, pastes it into the new array, then addeds a new entry by calling randomRgb() function, <FlatList /> used when you have an array of elements you want to display on screen
  return(
    <View>
      <Button title="add a color" onPress={()=>{
        setColors([...colors, randomRgb()]);
      }}/>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item})=>{
          return(
            <View style={{height: 100, width: 100, backgroundColor: item}} />
          );
        }}
        />
    </View>
  )
}

//Generates RGB values
const randomRgb = () => {
  //Generates a random number
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  //Returns a single string used as the RGB value
  return `rgb(${red}, ${green}, ${blue})`;
}

//Styles component
const styles = StyleSheet.create({});

export default ColorScreen;
