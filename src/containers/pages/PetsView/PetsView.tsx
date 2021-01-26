import React from 'react'
import {PetProps} from "../../../api/PetsApi"
import Pets from "../../../components/Pets/Pets"
import Search from '../../PetSearch/PetSearch'
import {connect} from 'react-redux'
import { searchPets } from '../../../store/actions/pets'

const PetsView = (props: any) => {
    return (
        <div>
            <Search onSearch={props.onSearch} onSearchSimplified={props.onSearchSimplified} />
            <Pets pets={props.pets}/>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        pets: state.petStore.pets
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearch: (petModel: Partial<PetProps>, searchItem: string) => dispatch(searchPets(petModel, searchItem)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetsView)