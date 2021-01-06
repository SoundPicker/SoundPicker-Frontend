import axios from "axios";

const url = "http://3.35.187.65:3000/main";

const getCategories = async () => {
  try {
    const { data } = await axios.get(`${url}`);
    console.log("[SUCCESS] GET CATEGORIES", data);
    console.log(data.data.categories);
    return data.data.categories;
  } catch (e) {
    console.error("[FAIL] GET CATEGORIES", e);
    throw e;
  }
};

export default getCategories;
