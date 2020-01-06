import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  //Creates a term state for this component - used by the search bar to make searches, setTerm lets us update the term state
  const[term, setTerm] = useState('');
  //Saves the varibles from the useResults hook (used in JSX below)
  const [searchApi, results, errorMessage] = useResults();

  //Returns a group of restaurants by price - We are given an array of restaurants, in these restaurants Yelp uses $ to show restaurant price, e.g we pass in $ and it removes restaurants that arent priced at $
  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  //Returns on screen elements
  return(
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null }
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
