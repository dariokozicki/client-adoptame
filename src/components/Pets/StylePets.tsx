import styled from 'styled-components';

export const StyledPets = styled.div`
	margin: 0 auto;
    display: grid;
	grid-gap: 2rem;
	/* grid-template-columns: repeat(auto-fill, 20em); */
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`