import React, { Fragment, useEffect, useState } from 'react'
import {PetProps} from "../../../api/PetsApi"
import Pets from "../../../components/Pets/Pets"
import Search from '../../PetSearch/PetSearch'
import { getPetsFiltered } from '../../../api/PetsApi'

const PetsView = () => {
    const [pets, setPets] = useState<PetProps[]>([]);

    const onSearch = (petModel: Partial<PetProps>, searchKeyword: string | null) => {
        getPetsFiltered(petModel, searchKeyword || '').then(setPets)
    }

    useEffect(() => onSearch({}, null), []);

    return (
        <Fragment>
            <Search onSearch={onSearch} />
            <Pets pets={pets}/>
        </Fragment>
    )
}

export default PetsView