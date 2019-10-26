import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 32},
    { name: 'Friend 2', age: 32},
    { name: 'Friend 3', age: 32},
    { name: 'Friend 4', age: 32},
    { name: 'Friend 5', age: 32},
    { name: 'Friend 6', age: 32},
    { name: 'Friend 7', age: 32},
    { name: 'Friend 8', age: 32},
    { name: 'Friend 9', age: 32}
  ]
    return(
       <FlatList
         keyExtractor={friend => friend.name}
         data={friends}
         renderItem={({item}) => {
           return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
         }}
       />
    )
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 1
  }
});

export default ListScreen;
