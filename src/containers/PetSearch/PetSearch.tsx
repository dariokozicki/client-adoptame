import React, { Fragment, useEffect, useState } from 'react'
import {PetProps, getSpecies} from '../../api/PetsApi'
import classes from "./PetSearch.module.css"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown'

const PetSearch = ({onSearch}: any) => {
    const [petModel, setPetModel] = useState<Partial<PetProps>>({})
    const [adopted, setAdopted] = useState<string | null>(null)
    const [species, setSpecies] = useState<string[]>([])
    const [advanced, setAdvanced] = useState<boolean>(false)

    useEffect(() => {
        getSpecies().then(setSpecies)
        onSearch(petModel)
    }, [petModel, onSearch])

    return (
        <div className={classes.Search}>
            <InputText
                id="searchBar" className={classes.SearchItem} placeholder="Buscar" onChange={(e) => onSearch(petModel, e.currentTarget.value)}    
            />
            {advanced && 
            <Fragment>
                <Dropdown 
                    className={classes.SearchItem}
                    options={species}
                    placeholder="Especie"
                    value={petModel.species}
                    onChange={(e)=>{
                        setPetModel({...petModel, species: e.target.value}) 
                    }}
                />
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
            </Fragment>}
            <Button className={[classes.SearchItem, "p-button-help","p-button-rounded"].join(" ")} icon="pi pi-sliders-v" onClick={() => setAdvanced(!advanced)}  />
            <Button label="Search" className={[classes.SearchItem, "p-button-help"].join(" ")}
                onClick={() => onSearch(petModel) }
            />
        </div>
    )
}

export default PetSearch