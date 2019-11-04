import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const SquareScreen = () => {
  //Increment red, blue or green by an RGB value of 15
  const COLOR_INCREMENT = 15;
  //Initalises state for colors
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  //Validation - prevents red, green and blue exceeding 255 or 0 RGB values
  const setColor = (color, change) => {
    switch(color){
      case 'red':
        red + change > 255 || red + change < 0 ? null: setRed(red + change);
        console.log(red)
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null: setBlue(blue + change);
        console.log(blue)
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null: setGreen(green + change);
        console.log(green)
        return;
      default:
        return;
    }
  }

  return(
    <View>
      <ColorCounter
       onIncrease={() => setColor('red', COLOR_INCREMENT)}
       onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
       color='Red '/>
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color='Blue'/>
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color='Green'/>
       <View  style={{height: 150, width: 150, backgroundColor:`rgb(${red},${green},${blue})`}}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
