import axios from "axios";

const url = "https://us-central1-fir-first-app-1156c.cloudfunctions.net/beds";

export const getAllBeds = async () => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {}
};
