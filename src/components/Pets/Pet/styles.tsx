import styled from 'styled-components';

/* export const StyledTitle = styled.h3<{color?:string}>`
    font-size: 20px;
    color: ${ (props) => props.color ? props.color : 'red'};
` */
export const StyledCard = styled.div`
    padding: 2px 16px;
	display: flex;
	justify-content: space-between;
    h4{
        font-weight: 300;
    }
    h3{
        text-transform: uppercase;
	font-weight: 100;
    }
`

export const ImageContainer = styled.div`
    width: 20em;
	height: 15em; 
    img{
        width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
    }      
`
