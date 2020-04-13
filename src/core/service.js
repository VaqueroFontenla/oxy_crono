import axios from "axios";
import * as mapper from "./mapper";

const url = "https://us-central1-fir-first-app-1156c.cloudfunctions.net/beds";

export const getAllBeds = async () => {
  try {
    const response = await axios(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBed = async (id) => {
  try {;
    const response = await axios(`${url}/bed/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const addBed = async (values) => {
  
  try {
    const response = await axios.post(
      `${url}/add/`,
      mapper.mapFormToApi(values)
    );
    if (response.status === 201) {
      console.log(
        "El nuevo Post ha sido almacenado con id: " + response.data.id
      );
    }
  } catch (error) {
    console.log(error);
  }
};
