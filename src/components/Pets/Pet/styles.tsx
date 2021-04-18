import styled from 'styled-components';

/* export const StyledTitle = styled.h3<{color?:string}>`
    font-size: 20px;
    color: ${ (props) => props.color ? props.color : 'red'};
` */
export const StyledCard = styled.div`
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	transition: 0.3s ease;
	border-radius: 0.7rem;
    overflow:hidden;
`

export const PetsInfo = styled.div<{bgColor?:boolean}>`
    padding: 2px 16px;
	display: flex;
	justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s ease;
    background: ${ (props) => props.bgColor ? '#988fff' : 'white'};
    color: ${ (props) => props.bgColor ? 'white' : '#988fff'};
    h4{
        font-weight: 300;
    }
    h3{
        text-transform: uppercase;
	    font-weight: 100;
    }     
`

export const ImageContainer = styled.div`
	height: 15em; 
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
    }      
`
