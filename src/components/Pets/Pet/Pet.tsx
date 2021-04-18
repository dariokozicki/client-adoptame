import React from 'react';
import classes from './Pet.module.css';
import { PetProps } from '../../../api/PetsApi';
import {  StyledCard, ImageContainer, PetsInfo } from './styles'

const Pet = (props: { pet: PetProps }) => {
	const age = new Date().getFullYear() - props.pet.birthday.getFullYear();
	const petClasses = [classes.Pet];
	petClasses.push(
		props.pet.adopted ? classes.PetAdopted : classes.PetAvailable
	);
	return (
		<StyledCard /* className={petClasses.join(' ')} */>
			<ImageContainer>
				<img
					alt={props.pet.name}
					src={props.pet.img}
				></img>
			</ImageContainer>
			<PetsInfo bgColor={props.pet.adopted}>
				<div>
					<h3 >{props.pet.name}</h3>
					<h4>Edad: {age + ' ' + (age > 1 ? 'años' : 'año')}</h4>
				</div>
				<div>
					<h3>{props.pet.adopted ? 'Adoptado 😍' : 'Disponible 🔥'}!</h3>
					<h4>Sexo: M</h4>
				</div>
			</PetsInfo>
		</StyledCard>
	);
};

export default Pet;
