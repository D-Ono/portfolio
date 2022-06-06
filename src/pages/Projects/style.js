import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column; 
    align-items: center;
`;

export const ProjectContainer = styled.div`
    width: 90%; 
    display: flex; 
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 700px){
        height: auto;
        flex-direction: column;
        align-items: center;
        hr {
            display: none;
        }
    }
`;

export const ProjectDiv = styled.div`
    height: 24rem; 
    width: 23rem; 
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center; 
    background-color: var(--background-div); 
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1rem;

    h4 {
        color: var(--text-body);
        line-height: 1.5rem;
        text-align: center;
        margin: 0.8rem 0;
    }

    @media (max-width: 700px){
        height: 250px; 
        width: 90vw; 

        hr {
            display: none;
        }

        &:first-child { 
            margin-bottom: 2.5rem;
        }
    }
`;

export const Description = styled.p`
    color: var(--text-body);
    text-align: justify;
    padding: 5px; 
    line-height: 1.25rem;
    margin-bottom: 1.5rem;
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