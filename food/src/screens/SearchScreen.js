import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  //Creates a term state for this component - used by the search bar to make searches, setTerm lets us update the term state
  const[term, setTerm] = useState('');
  //Creates a results state for the component - uses to display the results of the Yelp API request, setResults lets us update the results state
  const[results, setResults] = useState([]);

  //Executes Axios request to Yelp API - uses async await to handle results returned from Yelp API (JSON)
  const searchApi = async () => {
    //Makes the Axios request and saves the results to a variable - await waits for a result to be returned, params is a 2nd arugment that appends parameters to the BaseURL (check Yelp API for parameters)
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: term,
        location: 'san jose'
      }
    });
    //Saves the results (JSON) of the API request to the results state of this component (which is then displayed on screen using return())
    setResults(response.data.businesses);
  }

  //Returns on screen elements
  return(
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>SearchScreen </Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
