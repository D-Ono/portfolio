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
`;

export const ProjectDiv = styled.div`
    height: 20rem; 
    width: 16rem; 
    background-color: var(--background-div); 
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem;
`;
