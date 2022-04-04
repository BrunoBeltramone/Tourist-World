import axios from 'axios'

export function getAllCountries() {
    return async function(dispatch){
        var info = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: info.data
        })


    }
}