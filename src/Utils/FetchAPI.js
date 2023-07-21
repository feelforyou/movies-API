const fetchAPI = async (query) => {
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "381428dafdmsh81ece4824a10633p1529e6jsn480b3c4a1837",
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
