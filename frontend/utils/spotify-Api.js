import axios from "axios";

export const fetchData = async (query) => {
  try {
    let data = await axios.get(
      `https://v1.nocodeapi.com/varunkaushikk/spotify/KVFVHiQfUBmMHXjf/search?q=${query}&type=track`
    );
    return data;
  } catch (error) {
    console.log("error fetching api data:", error);
    throw error;
  }
};
