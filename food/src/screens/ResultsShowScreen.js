import React, {useState, useEffect}  from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

//Displays detailed information about a restaurant - parent is ResultsList
const ResultsShowScreen = ({navigation}) => {
  //Initalises state for component - state is initally set to null which is used in error check logic preventing an error on page load
  const [result, setResult] = useState(null);
  //Saves the business id passed in from ResultsList - .navigate('ResultsShow', { id: item.id})
  const id = navigation.getParam('id');

  //Async function that gets the restaurant details from Yelp API and saves it to the components state
  const getResult = async (id) => {
    //Makes a request to the Yelp API with the passed in business id
    const response = await yelp.get(`/${id}`);
    //Saves the response to the components state
    setResult(response.data);
  };

  //Executes the getResult() function only once on page load - this is because we want to execute the Yelp API request/get the restaurant details only once
  useEffect(() => {
    getResult(id);
  }, []);

  //Error check - If there are no restaurant details (result state) then return null for the whole component (prevents JSX referncing properties that dont exist and causing an error)
  if(!result){
    return null;
  }
  //Displays the restaurant name and photos on screen - <FlatList> used when working with an array; data={result.photos} is the array of photos returned from the Yelp API; keyExtractor={(photo) => photo} uses the photos URL to assign a unique key (used by React when updating); renderItem={item} a render function that displays images on screen, {item} is the image URL
  return(
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri:item}} />
        }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    image:{
      height: 200,
      width: 300
    }
});

export default ResultsShowScreen;
