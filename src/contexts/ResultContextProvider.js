import React, { createContext, useContext, useState } from "react";
import axios from 'axios'

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/";
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState();

  const options = {
    method: 'GET',
    url: 'https://google-search74.p.rapidapi.com/',
    params: { query: searchTerm, limit: '10', related_keywords: 'true' },
    headers: {
      'X-RapidAPI-Key': 'fc6048848fmshf1fc35333d1fbb5p14c024jsn3445ce4952bb',
      'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
    }
  };

  const getResults = async (type) => {
    setIsLoading(true);

    axios.request(options).then(function (response) {
      console.error(response);
      setResults(response.data.results);
      setIsLoading(false);
    }).catch(function (error) {
      console.error(error);
    });

  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}>
      {children}
    </ResultContext.Provider>
  );
};
export const useResultContext = () => useContext(ResultContext);
