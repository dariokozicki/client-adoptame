import React, { Fragment, useEffect, useState } from 'react';
import { PetProps, getSpecies } from '../../api/PetsApi';
import classes from './PetSearch.module.css';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

const PetSearch = ({ onSearch }: any) => {
	const [petModel, setPetModel] = useState<Partial<PetProps>>({});
	const [adopted, setAdopted] = useState<string | null>(null);
	const [species, setSpecies] = useState<string[]>([]);
	const [advanced, setAdvanced] = useState<boolean>(false);
	const [searchKeyword, setSearchKeyword] = useState<string | undefined>('');

	useEffect(() => {
		getSpecies().then(setSpecies);
	}, []);


	return (
		<div className={classes.Search}>
			<input
				id="searchBar"
				className={classes.SearchInput}
				placeholder="Buscar"
				value={searchKeyword}
				onChange={(e) => setSearchKeyword(e.currentTarget.value)}
				onKeyPress={(event) => {
					if(event.key === 'Enter') 
						onSearch(petModel, searchKeyword)
				}}
			/>
			{advanced && (
				<Fragment>
					<Dropdown
						className={classes.SearchDrop}
						options={species}
						placeholder="Especie"
						value={petModel.species}
						onChange={(e) => {
							setPetModel({ ...petModel, species: e.target.value });
						}}
					/>
					<input
						id="petName"
						className={classes.SearchInput}
						value={petModel.name}
						placeholder="Nombre"
						onChange={(e) =>
							setPetModel({ ...petModel, name: e.currentTarget.value })
						}
					/>
					<Dropdown
						id="adopted"
						value={adopted}
						options={['Todos', 'Adoptado', 'Disponible']}
						className={classes.SearchDrop}
						placeholder={'Adopción'}
						onChange={({target:{value}}) => {
							setPetModel({
								...petModel,
								adopted: value === 'Todos' ? undefined : value === 'Adoptado',
							});
							setAdopted(value);
						}}
					/>
				</Fragment>
			)}
			<Button
				label="Search"
				className={[classes.SearchButton].join(' ')}
				onClick={() => onSearch(petModel, searchKeyword)}
			/>
			<Button
				className={[classes.SearchButton].join(' ')}
				icon="pi pi-sliders-v"
				onClick={() => setAdvanced(!advanced)}
			/>
		</div>
	);
};

export default PetSearch;
