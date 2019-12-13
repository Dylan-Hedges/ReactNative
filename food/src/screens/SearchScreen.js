import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  //Creates a term state for this component - used by the search bar to make searches, setTerm lets us update the term state
  const[term, setTerm] = useState('');
  //Creates a results state for the component - uses to display the results of the Yelp API request, setResults lets us update the results state
  const[results, setResults] = useState([]);
  //Creates an error message start
  const[errorMessage, setErrorMessage] = useState('');

  //Executes Axios request to Yelp API - uses async await to handle results returned from Yelp API (JSON)
  const searchApi = async (searchTerm) => {
    //Tries the Yelp API request
    try{
      //Makes the Axios request and saves the results to a variable - await waits for a result to be returned, params is a 2nd arugment that appends parameters to the BaseURL (check Yelp API for parameters)
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      //Saves the results (JSON) of the API request to the results state of this component (which is then displayed on screen using return())
      setResults(response.data.businesses);
    }catch(err){
      //Displays a custom error message if an error is found (could also use the err variable which contains the full error message)
      setErrorMessage('Something went wrong');
    }
  };

  //Executes the Yelp API search once on inital load (allows us to populate the screen with content before the user has made a search)
  useEffect(() => {
    searchApi('pasta');
  }, [])

  //Returns on screen elements
  return(
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null }
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
