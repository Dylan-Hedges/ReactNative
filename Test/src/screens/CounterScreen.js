import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//Reducer function that updates state - takes in action from dispatch()
const reducer = (state, action) => {
  //looks at action.type as the case in a switch statement to see if it should increase or decrease the counter
  switch(action.type){
    case 'INCREASE_COUNTER':
      //copies & pastes state in new object, replaces counter: property with new value, returns new object to be used as new state
      return {...state, counter: state.counter + action.payload}
    case 'DECREASE_COUNTER':
      return {...state, counter: state.counter - action.payload}
    //Returns the state in all other cases - a state object MUST always be return in a reducer, otherwise on rerender state = undefined
    default:
        return state;
    }
  }

const CounterScreen = () => {
  //Initalises state & references the reducer function
  const [state, dispatch] = useReducer(reducer, {counter: 0});

  //Displays elements on screen - dispatch() sends an action object with a type & payload to the reducer which is used as the 2nd arugment (action)
  return(
    <View>
      <Button title="Increase" onPress={() => { dispatch({type: 'INCREASE_COUNTER', payload: 1})}} />
      <Button title="Decrease" onPress={() => { dispatch({type: 'DECREASE_COUNTER', payload: 1})}} />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styls = StyleSheet.create({});

export default CounterScreen;
