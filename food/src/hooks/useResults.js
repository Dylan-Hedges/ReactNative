import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
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
  }, []);

  //Returns the variables needed for th JSX in the SearchScreen component
  return[searchApi, results, errorMessage];
}
