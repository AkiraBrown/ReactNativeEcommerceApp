import Axios from "./Axios";

async function getAllProducts() {
  try {
    let result = await Axios.get();
    return result;
  } catch (error) {
    return error;
  }
}

async function getById(id) {
  try {
    let result = await Axios.get(`/${id}`);
    return result;
  } catch (error) {
    return error;
  }
}

export { getAllProducts, getById };
