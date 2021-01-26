import React from 'react'
import Pet from "./Pet/Pet"
import {PetProps} from "../../api/PetsApi"
import classes from "./Pets.module.css"

const Pets = (props: {pets: PetProps[]}) => {

    const showPets = () => {
        return props.pets.length > 0 ? 
            props.pets.map(pet => 
                <Pet 
                key={pet.id}
                pet={pet} />
            )
        :  <h3>No hubo resultados para su búsqueda.</h3>
    }

    return (
        <div className={classes.Pets}>
            {showPets()} 
        </div>
    )
}

export default Pets