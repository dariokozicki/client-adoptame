import React from 'react'
import classes from "./Pet.module.css"

export type PetProps = {
    name: string,
    img: string,
    birthday: Date,
    id: number,
    adopted: boolean
}

const Pet = (props: {pet: PetProps}) => {
    const age = new Date().getFullYear() - props.pet.birthday.getFullYear()
    const petClasses = [classes.Pet]
    petClasses.push(props.pet.adopted ? classes.PetAdopted : classes.PetAvailable)
    return (
        <div className={petClasses.join(' ')}>
            <div className={classes.PetImageContainer}>
                <img alt={props.pet.name} src={props.pet.img} className={classes.PetImage}></img>
            </div>
            <div className={classes.container}>
                <div>
                    <h3>{props.pet.name}</h3>
                    <h4>Edad: {age + " " + (age > 1 ? "años" : "año")}</h4>
                </div>
                <div>
                    <h3>{props.pet.adopted ? "Adoptado 😍" : "Disponible 🔥"}!</h3>
                </div>
            </div>
        </div>
    )
}

export default Pet