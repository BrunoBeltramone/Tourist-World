const initialState = {
  countries: [],
  allCountries: [],
  country: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "GET_COUNTRY_BY_ID":
      return {
        ...state,
        country: action.payload,
      };
    case "GET_COUNTRY_BY_NAME":
      return {
        ...state,
        countries: action.payload,
      };
    case "FILTER_BY_CONTINENT":
      var filteredCountries =
        action.payload === "All"
          ? state.allCountries
          : state.allCountries.filter((el) => el.continente === action.payload);
      return {
        ...state,
        countries: filteredCountries,
      };
    case "FILTER_COUNTRIES_BY_NAME":
      var FilteredCountries =
        action.payload === "asc"
          ? state.countries.sort(function (a, b) {
              if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                return 1;
              }
              if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                return -1;
              }
              // a must be equal to b
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                return 1;
              }
              if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
      return {
        ...state,
        countries: FilteredCountries,
      };
    default:
      return state;
  }
}
