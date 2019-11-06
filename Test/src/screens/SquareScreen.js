import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../Components/ColorCounter';

//Increment red, blue or green by an RGB value of 15
const COLOR_INCREMENT = 15;

//Reducer function - returns an object to be used as the new state (copies the state object, pastes it into a new object, updates it, returns updated object to be used as new state )
const reducer = (state, action) => {
  switch(action.colorToChange){
    case 'red':
      //Updates state for red - ...state makes a copy of state obect, then pastes it to the new return{ } object, then deletes & replaces the red: property with red: state.red + action.amount, does not mutate state directly
      return {...state, red: state.red + action.amount}
    case 'green':
      return {...state, green: state.green + action.amount}
    case 'blue':
      return {...state, blue: state.blue + action.amount}
    default:
      return;
  }
};

const SquareScreen = () => {
  //Initalises state - sets colors and inital values in the state object
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  //Destructures & saves the values of red, green and blue from state
  const { red, green, blue} = state;
  //passes object to reducer as 2nd argument (action)
  return(
    <View>
      <ColorCounter
       onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
       onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
       color='Red '/>
      <ColorCounter
        onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
        color='Blue'/>
      <ColorCounter
        onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
        color='Green'/>
       <View  style={{height: 150, width: 150, backgroundColor:`rgb(${red},${green},${blue})`}}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
