import React, { useEffect, useState } from 'react'
import getPets from "../../api/PetsApi"
import {PetProps} from "../../components/Pets/Pet/Pet"
import Pets from "../../components/Pets/Pets"

const PetView = (props: any) => {
    const [pets, setPets]: [PetProps[], any] = useState([])
    useEffect(() => {
        getPets().then(p => setPets(p))
    }, [])
    return <Pets pets={pets}/>
}

export default PetView