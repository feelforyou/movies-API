const fetchAPI = async (query) => {
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result; // You can modify this line to return the result to the calling component
  } catch (error) {
    console.error(error);
    throw error; // You can modify this line to handle the error in the calling component
  }
};

export default fetchAPI;
