import { Dispatch } from "react";
import { getPetsFiltered, PetProps } from "../../api/PetsApi";
import { SEARCH_PETS } from "./actions";

export const searchPets = (petModel: Partial<PetProps>, searchItem: string) => async (dispatchEvent: Dispatch<any>) => {
    const pets =  await getPetsFiltered(petModel, searchItem);
    dispatchEvent({type: SEARCH_PETS, payload: {pets}})
}

