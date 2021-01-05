import React from 'react'
import classes from "./Pet.module.css"

export type PetProps = {
    name: string,
    img: string,
    birthday: Date,
    id: number
}

const Pet = (props: {pet: PetProps}) => {
    const age = new Date().getFullYear() - props.pet.birthday.getFullYear()
    return (
        <div className={classes.Pet}>
            <img alt={props.pet.name} src={props.pet.img}></img>
            <h3>{props.pet.name}</h3>
            <h4>{age + " año(s)"}</h4>
        </div>
    )
}

export default Pet