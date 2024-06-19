import axios from "axios";
import { getHeaders } from "../utils/apiConfig";
import { Dog } from "../shared/Interfaces";

export const getDogsList = async () => {
  try {
    const response = await axios.request<Dog[]>({
      method: "GET",
      url: `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100`,
      headers: getHeaders(),
    });

    // Handle client errors (4xx)
    if (response.status >= 400 && response.status < 500) {
      throw new Error(`Client error: ${response.status}`);
    }

    // Handle server errors (5xx)
    if (response.status >= 500 && response.status < 600) {
      throw new Error(`Server error: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    console.error("Error fetching dogs list:", error);
    throw error;
  }
};
