import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail.js';

//Renders list of returned restaurants on screen - when tapped opens up restaurant details in a new component (passes the business id to the ResultsDetail component which uses the id to exectue an API request to the Yelp API)
const ResultsList = ({title, results, navigation}) => {
  //If there are no restaurants for a category (e.g Big Spender) then dont return anything for that category (null) - category is not displayed on screen, otherwise a title is displayed with nothing underneath
  if(!results.length){
    return null;
  }

  //Displays a list of restaurants on screen when making a search
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
          return(
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id})}>
              <ResultsDetail result={item}/>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container:{
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);
