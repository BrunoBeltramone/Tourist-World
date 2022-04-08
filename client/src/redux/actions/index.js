import axios from "axios";

export function getAllCountries() {
  return async function (dispatch) {
    var info = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: info.data,
    });
  };
}

export function getCountryById(id) {
  return async function (dispatch) {
    var info = await axios.get(`http://localhost:3001/countries/${id}`);
    return dispatch({
      type: "GET_COUNTRY_BY_ID",
      payload: info.data,
    });
  };
}

export function getCountryByName(nombre){
  return async function(dispatch){
    try{
      var info = await axios.get(`http://localhost:3001/countries?name=${nombre}`);
      return dispatch({
        type: "GET_COUNTRY_BY_NAME",
        payload: info.data
      })
    }
    catch(err){
      console.log(err)
    }
  }
}

export function filterCountriesByContinent(payload){
  return{
    type: "FILTER_BY_CONTINENT",
    payload
  }

}

export function filterCountriesByName(payload) {
  return{
      type: "FILTER_COUNTRIES_BY_NAME",
      payload,
    };
}
