import React, { useEffect, useState } from 'react'
import {AutoComplete} from 'primereact/autocomplete'
import {getBreeds, PetProps, getSpecies} from '../../api/PetsApi'
import classes from "./PetSearch.module.css"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown'

const PetSearch = (props: any) => {
    const [petModel, setPetModel] = useState<Partial<PetProps>>({})
    const [breeds, setBreeds] = useState<string[]>([])
    const [filteredBreeds, setFilteredBreeds] = useState<string[]>([])
    const [adopted, setAdopted] = useState<string | null>(null)
    const [species, setSpecies] = useState<string[]>([])

    const searchBreed = (event: any) => {
        setFilteredBreeds(
            !event.query.trim().length ? 
                [...breeds] :
                breeds.filter((breed) => {
                    return breed.toLowerCase().startsWith(event.query.toLowerCase());
                })
        )
    }

    useEffect(() => {
        getBreeds().then(setBreeds)
        getSpecies().then(setSpecies)
    }, [])

    return (
        <div className={classes.Search}>
            <Dropdown 
                className={classes.SearchItem}
                options={species}
                placeholder="Especie"
                value={petModel.species}
                onChange={(e)=>{
                    setPetModel({...petModel, species: e.target.value}) 
                }}
            />
            <AutoComplete 
                placeholder="Raza"
                className={classes.SearchItem}
                value={petModel.breed} 
                suggestions={filteredBreeds} 
                dropdown 
                completeMethod={searchBreed} 
                onChange={(e) => setPetModel({
                    ...petModel,
                    breed: e.value
                })} />
            <InputText 
                id="petName" className={classes.SearchItem} value={petModel.name} placeholder="Nombre" onChange={(e) => setPetModel({...petModel, name: e.currentTarget.value})}
            />
            <Dropdown 
                id="adopted" value={adopted} options={["Adoptado", "Disponible"]}  className={classes.SearchItem}
                placeholder={"Adopción"} 
                onChange={(e) => {
                    setPetModel({...petModel, adopted: e.target.value === "Adoptado"}) 
                    setAdopted(e.target.value)
                }}
            />
            <Button label="Search" className={[classes.SearchItem, "p-button-success"].join(" ")}
                onClick={() => props.setPetsFromModel(petModel) }
            />
        </div>
    )
}

export default PetSearch