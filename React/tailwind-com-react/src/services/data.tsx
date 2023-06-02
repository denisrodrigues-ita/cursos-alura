import React from 'react';
import apiFetch from './apiFetch'

const Data = () => {
  const [data, setData] = React.useState([])

  const URL = "https://raw.githubusercontent.com/cardozov/alura-newsletter/aula3/articles.json"
  const METHOD = "GET"

  React.useEffect(() => {
    const fetchApi = async () => {
      const response = await apiFetch({ url: URL, method: METHOD })
      setData(response);
    }
    fetchApi()
  }, [])

  return data
}

export default Data;
