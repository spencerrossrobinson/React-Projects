import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID rAxzWAh8_SrjDtgAWeH_b_vQC5PEWhX1UnfoxdoL6B8",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
