import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../Components/ColorCounter';

//Increment red, blue or green by an RGB value of 15
const COLOR_INCREMENT = 15;

//Reducer function - returns an object to be used as the new state (copies the state object, pastes it into a new object, updates it, returns updated object to be used as new state )
const reducer = (state, action) => {
  switch(action.type){
    case 'change_red':
      //Updates state for red - first performs validation check using a ternary operator, if the current value of red (state.red) + the incrementor (action.amount) is > 255 or < 0 then do nothing & just return state, otherwise update state, ""...state" makes a copy of state obect, pastes it to the new { } object, replaces the red: property with "red: state.red + action.amount" (does not mutate state directly), the object is then returned which acts as the new state
      return state.red + action.payload > 255 || state.red + action.payload < 0
      ? state
      : {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
      ? state
      :  {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
      ? state
      : {...state, blue: state.blue + action.payload };
    default:
      return state;
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
       onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
       onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
       color='Red '/>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
        color='Blue'/>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        color='Green'/>
       <View  style={{height: 150, width: 150, backgroundColor:`rgb(${red},${green},${blue})`}}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
