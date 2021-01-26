import { PetProps } from "../../api/PetsApi";
import * as actionTypes from '../actions/actions'
import {getPetsFiltered} from '../../api/PetsApi'

const initialState = {
    pets: [],
    getPets: process.env.REACT_APP_MODE === 'MOCK' ? getPetsFiltered : () => console.log("placeholder para conseguir mascotas")
}

type PetsReducerAction =  {
    type:string, 
    payload: {
        pets: PetProps[]
    }, 
    meta: any
}

const PetsReducer = (state = initialState, action: PetsReducerAction) => {
    switch(action.type){
        case actionTypes.SEARCH_PETS:
            return {
                ...state,
                pets: action.payload.pets
            }
    }
    return state;
}

export default PetsReducer;