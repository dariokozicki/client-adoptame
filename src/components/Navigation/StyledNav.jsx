import styled from 'styled-components'

export const Nav = styled.div`
    box-sizing:border-box;
    padding: 1rem 2rem;
    width:100%;
    margin:0 auto;
    background: #988fff;
`;

export const NavContent = styled.div`
    width:95%;
    margin:0 auto;

    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
    background: #988fff;
`;

export const Hamburguer = styled.div`
    display:none;
    cursor:pointer;
    div{
        color: white;
        font-size:1.5rem;
        &:hover{
            color: #544aaa;
        }
    }
    @media (max-width: 768px){
            display: flex;
             
        }
`;


export const Menu = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
   /*  position: relative; */
    @media (max-width: 768px){
        overflow:hidden;
        flex-direction:column;
        width:100%;
        max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
        transition: max-height 0.3s ease-in;
        background-color:white;
        align-items:start;
        padding: 1rem 0 1rem 1rem;
        padding: ${({isOpen}) => isOpen ? '1rem 0 1rem 1rem' : '0' }
    }
`;

export const MenuLink = styled.a`
    padding: 0 1rem;
    cursor:pointer;
    text-align:center;
    text-decoration:none;
    color: white;
    transition: all 0.3s ease-in;

    &:hover{
        color:#544aaa;
    }
    @media (max-width: 768px){
        color:#544aaa;
        padding: 0;
    }
`;

export const Logo = styled.a`
padding: 1rem 0 ;
color: white;
text-decoration:none;
font-size: 1.7rem;
`;