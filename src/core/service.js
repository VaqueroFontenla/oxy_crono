import axios from "axios";
import * as mapper from "./mapper";

const url = "https://us-central1-fir-first-app-1156c.cloudfunctions.net/beds";

export const getAllRecords = async () => {
  try {
    const response = await axios(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRecord = async (id) => {
  try {;
    const response = await axios(`${url}/bed/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const addRecord = async (values) => {  
  try {
    const response = await axios.post(
      `${url}/add/`,
      mapper.mapFormToApi(values)
    );
    if (response.status === 201) {
      console.log(
        "El nuevo registro ha sido almacenado con id: " + response.data.id
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecord = async (id) => {  
  try {
    const response = await axios.delete(
      `${url}/delete/${id}`,
    );
    if (response.status === 200) {
      console.log(
        "El registro ha sido eliminado "
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateRecord = async ( id, values) => {  
  try {
    const response = await axios.put(
      `${url}/update/${id}`,
      mapper.mapFormToApi(values)
    );
    if (response.status === 201) {
      console.log(
        "El registro ha sido actualizado"
      );
    }
  } catch (error) {
    console.log(error);
  }
};
