import React, { useEffect, useState } from 'react'
import {getPets, getPetsFiltered} from "../../../api/PetsApi"
import {PetProps} from "../../../api/PetsApi"
import Pets from "../../../components/Pets/Pets"
import Search from '../../../components/PetSearch/PetSearch'

const PetView = (props: any) => {
    const [pets, setPets]= useState<PetProps[]>([])
    
    useEffect(() => {
        getPets().then(p => setPets(p))
    }, [])

    const setPetsFromModel = (petModel: Partial<PetProps>) => {
        getPetsFiltered(petModel).then(pets => setPets(pets))
    }

    return (
        <div>
            <Search pets={pets} setPetsFromModel={setPetsFromModel} />
            <Pets pets={pets}/>
        </div>
    )
}

export default PetView