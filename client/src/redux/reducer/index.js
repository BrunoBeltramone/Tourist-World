const initialState = {
  countries: [],
  allCountries: [],
  country: {},
  activities: []
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

    case "POST_ACTIVITY":
      return state;
    
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload
      }
    
    case "FILTER_COUNTRIES_BY_ACTIVITY":
      console.log(action.payload)
      // let act = state.countries.map( p => p.Activities.map( c => c.nombre.includes(action.payload)))
      let paises = []
      let act = state.allCountries.map( p => p.Activities?.map(c => c.nombre === (action.payload) ? paises.push(p) : console.log("Hola")))
      console.log(paises)
      return{
        ...state,
        countries: paises
      }

    case "FILTER_BY_POBLATION":
      var filteredPoblation = action.payload === 'desc'? state.countries.sort(function(a, b){return a.poblacion-b.poblacion}) : action.payload === 'asc'? state.countries.sort(function(a, b){return b.poblacion-a.poblacion}) : state.countries
      return{
        ...state,
        countries: filteredPoblation
      }

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
          : action.payload === "desc" ? state.countries.sort(function (a, b) {
              if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                return 1;
              }
              if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                return -1;
              }
              // a must be equal to b
              return 0;
            }): state.countries;
      return {
        ...state,
        countries: FilteredCountries,
      };

    default:
      return state;
  }
}
