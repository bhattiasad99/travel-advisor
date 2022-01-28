import axios from "axios";
const url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const options = {
  method: "GET",
  url: url,
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "50f659aa4emshacc79b5dc36bb2dp17a099jsne45beec93ac7",
  },
};

export const getPlacesData = async (northEast, southWest) => {
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      method: "GET",
      url: url,
      params: {
        bl_latitude: southWest.lat,
        tr_latitude: northEast.lat,
        bl_longitude: southWest.lng,
        tr_longitude: northEast.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "50f659aa4emshacc79b5dc36bb2dp17a099jsne45beec93ac7",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
