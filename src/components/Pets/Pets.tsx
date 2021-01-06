import React from 'react'
import Pet, { PetProps } from "./Pet/Pet"
import classes from "./Pets.module.css"

const Pets = (props: {pets: PetProps[]}) => (
        <div className={classes.Pets}>
        {props.pets.map(pet => 
                        <Pet 
                        pet={pet} />
                )} 
        </div>
)

export default Pets