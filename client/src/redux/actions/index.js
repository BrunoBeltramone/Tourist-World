import axios from "axios";

export function getAllCountries() {
  return async function (dispatch) {
    var info = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: info.data,
    });
  };
};

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
      return alert("No se ha encontrado un Pais con ese Nombre")
    }
  }
}

export function filterCountriesByPoblation(payload){
  return{
    type: "FILTER_BY_POBLATION",
    payload
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
export function postActivity(payload){
  return async function(dispatch){
      var resp = await axios.post(`http://localhost:3001/activity`, payload);
      console.log(resp);
      return resp;
  }

}