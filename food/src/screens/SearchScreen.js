import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  //Creates a term state for this component - used by the search bar to make searches, setTerm lets us update the term state
  const[term, setTerm] = useState('');
  //Saves the varibles from the useResults hook (used in JSX below)
  const [searchApi, results, errorMessage] = useResults();

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
      <ResultsList title="Cost Effective"/>
      <ResultsList title="Bit Pricier"/>
      <ResultsList title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
