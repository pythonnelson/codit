import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get("https://emkc.org/api/v2/piston/runtimes");
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API");
    throw error;
  }
}

export default fetchData;
