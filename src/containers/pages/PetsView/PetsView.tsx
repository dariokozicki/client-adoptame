import React, { Fragment } from 'react'
import {PetProps} from "../../../api/PetsApi"
import Pets from "../../../components/Pets/Pets"
import Search from '../../PetSearch/PetSearch'
import {connect} from 'react-redux'
import { searchPets } from '../../../store/actions/pets'
import Navbar from '../../../components/Navigation/Navbar';

const PetsView = (props: any) => {
    return (
        <Fragment>
            <Navbar/>
            <Search onSearch={props.onSearch} onSearchSimplified={props.onSearchSimplified} />
            <Pets pets={props.pets}/>
        </Fragment>
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