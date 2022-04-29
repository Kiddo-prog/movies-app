const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};
export async function fetchApi(path) {
  try {
    const response = await fetch(
      `https://movies-app1.p.rapidapi.com/api/${path}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`An error occured ${error}`);
  }
}
