import { Dispatch } from "react";
import { getPetsFiltered, getPetsSimplified, PetProps } from "../../api/PetsApi";
import { SEARCH_PETS } from "./actions";

export const searchPets = (petModel: Partial<PetProps>) => async (dispatchEvent: Dispatch<any>) => {
    const pets =  await getPetsFiltered(petModel);
    dispatchEvent({type: SEARCH_PETS, payload: {pets}})
}

export const searchPetsSimplified = (searchItem: string) => async (dispatchEvent: Dispatch<any>) => {
    const pets =  await getPetsSimplified(searchItem);
    dispatchEvent({type: SEARCH_PETS, payload: {pets}})
}
