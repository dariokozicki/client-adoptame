import React from 'react'
import {PetProps} from "../../../api/PetsApi"
import Pets from "../../../components/Pets/Pets"
import Search from '../../PetSearch/PetSearch'
import {connect} from 'react-redux'
import { searchPets } from '../../../store/actions/pets'

const PetView = (props: any) => {
    return (
        <div>
            <Search onSearch={props.onSearch} />
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
        onSearch: (petModel: Partial<PetProps>) => dispatch(searchPets(petModel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetView)