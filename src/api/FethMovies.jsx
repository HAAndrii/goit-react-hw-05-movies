import axios from 'axios';

async function FethMovies(params, query) {
  try {
    const APIkey = '05ccb66bc585d7c8c0c1ccd2edb23ebd';

    const param = new URLSearchParams({
      api_key: APIkey,
      query,
      language: 'en - US',
      page: 1,
    });

    const responce = await axios.get(
      `https://api.themoviedb.org/3/${params}?${param}`
    );

    //'https://api.themoviedb.org/3/search/movie?query=av&include_adult=false&language=en-US&page=1',
    //'https://api.themoviedb.org/3/movie/1111?language=en-US',
    //'https://api.themoviedb.org/3/movie/1111/credits?language=en-US',
    //'https://api.themoviedb.org/3/movie/1111/reviews?language=en-US&page=1',

    if (!responce.status === 200) {
      throw new Error(responce.status);
    }

    return await responce.data;
  } catch (error) {
    console.log('error', error);
  }
}

export default FethMovies;
