const initialState = {
    countries : [],
    country : {},
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: action.payload
            }        
        case 'GET_COUNTRY_BY_ID':
            return{
                ...state,
                country: action.payload
            }        
        // case 'Filtro_AlfabeticoZ_A':
        //     return{
        //         ...state,
        //         countries: action.payload
        //     }
        // case 'Filtro_AlfabeticoA_Z':
        //     return{
        //         ...state,
        //         countries: action.payload
        //     }
        default :
            return state
    }
}