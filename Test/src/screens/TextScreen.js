import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
  //Inistalises state - used to store the text entered in child component
  const [text, setText] = useState('');

  //Displays password entry on screen - uses ternary exoress to apply validation, value={text} hard codes value of text entry, state updates as user types; onChangeText={} executes every time a user types a letter, sets what the user has typed to the text state; autoCapitalize="none" disable auto captialization for first letter; autoCorrect={false} disables auto correct when typing;
  return(
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(newText) => {setText(newText)}}
        />
        {text.length < 5 && text.length > 0 ? <Text>Password must be at least 5 characters</Text> : null}
    </View>
  )
}

//Styles Text Input - text input is invisible by default
const styles = StyleSheet.create({
  input:{
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
