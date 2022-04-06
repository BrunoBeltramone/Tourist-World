import axios from "axios";

export function getAllCountries() {
    return async function (dispatch) {
      var info = await axios.get("http://localhost:3001/countries");
      return dispatch({
        type: "GET_COUNTRIES",
        payload: info.data
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

// export function FiltroAlfabeticoZ_A() {
//   return async function (dispatch) {
//     var info = await axios.get("http://localhost:3001/countries");
//     var paises = info.data;
//     function SortArray(x, y) {
//       if (x.nombre < y.nombre) return 1;
//       if (x.nombre > y.nombre) return -1;
//       return 0;
//     }
//     var PaisesOrdenados = paises.sort(SortArray);
//     return dispatch({
//       type: "Filtro_AlfabeticoZ_A",
//       payload: PaisesOrdenados,
//     });
//   };
// }

// export function FiltroAlfabeticoA_Z() {
//   return async function (dispatch) {
//     var info = await axios.get("http://localhost:3001/countries");
//     var paises = info.data;
//     function SortArray(x, y) {
//       if (x.nombre > y.nombre) return 1;
//       if (x.nombre < y.nombre) return -1;
//       return 0;
//     }
//     var PaisesOrdenados = paises.sort(SortArray);
//     return dispatch({
//       type: "Filtro_AlfabeticoA_Z",
//       payload: PaisesOrdenados,
//     });
//   };
// }
