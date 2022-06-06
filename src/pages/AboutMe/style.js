import styled from "styled-components";

export const Container = styled.div`
    width: 98vw; 
    height: 90vh; 
    display: flex; 

    @media (max-width: 700px){
        display: flex; 
        flex-direction: column;
        height: auto;
    }
`;

export const ImageDiv = styled.div`
    width: 50%;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    img {
        width: 18rem; 
        height: 18rem; 
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    @media (max-width: 700px){
        width: 100%;
        height: auto;

        img {
            margin-top: 2rem;
        }
    }
`;

export const TextDiv = styled.div`
    width: 50%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
        color: white;
    }
    h4 {
        color: var(--text-body);
        line-height: 2.6rem;
        font-size: 1.3em;
        margin-bottom: 3rem;
    }

    @media (max-width: 700px){
        width: 100%;
        height: auto;
        padding-left: 3rem;
    }
`;

export const Button = styled.button`
    width: 150px; 
    height: 45px; 
    border-radius: 10px; 
    cursor: pointer; 
    border: none; 
    text-transform: uppercase; 
    letter-spacing: 2px; 
    font-weight: bold; 
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease; 

    a {
        color: black; 
        text-decoration: none;
    }

    &:hover{
        background-color: var(--text-title);
        transform: translateY(-7px);
        color: #FFF;
        box-shadow: 0px 10px 25px rgba(46, 223, 229, 0.445); 
    }
`;