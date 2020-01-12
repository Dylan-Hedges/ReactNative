import React, {useState, useEffect}  from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

//Displays detailed information about a restaurant - parent is ResultsList
const ResultsShowScreen = ({navigation}) => {
  //Initalises state for component - state is initally set to null which is used in logic to prevent an error on page load (logic returns null for the whole component if there are no restaurant details)
  const [result, setResult] = useState(null);
  //Saves the business id passed in from ResultsList - .navigate('ResultsShow', { id: item.id})
  const id = navigation.getParam('id');

  //Gets the restaurant details from Yelp API and saves it to the component states - makes an API request to the Yelp API with the business id that was passed in
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  //Executes the Yelp API request function only once on page load - this is because we only need to get the restaurant details once
  useEffect(() => {
    getResult(id);
  }, []);

  return(
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
