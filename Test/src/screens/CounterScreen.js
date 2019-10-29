import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  //Functional Component state - useState(0) creates a new piece of state we want to track, sets it to 0; [counter, setCounter] - array destructuring, takes 1st element in array useState() and saves to variable counter, takes 2nd element in array useState() and saves to setCounter
  const [counter, setCounter] = useState(0);
  //{setCounter(counter +1);} - similar to setState(), updates state value, rerenders component after
  return(
    <View>
      <Button title="Increase" onPress={() => { setCounter(counter +1); }} />
      <Button title="Decrease" onPress={() => { setCounter(counter -1); }} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styls = StyleSheet.create({});

export default CounterScreen;
