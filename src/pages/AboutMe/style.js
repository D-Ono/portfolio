import styled from "styled-components";

export const Container = styled.div`
    width: 100vw; 
    height: 80vh; 
    display: flex; 
`;

export const TextDiv = styled.div`
    width: 50%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        color: var(--text-subtitle);
        margin-bottom: 2.5rem;
        
    }
    h2 {
        color: var(--text-body);
        line-height: 1.5rem;
        text-align: center;
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
        margin-bottom: 2.5rem;
    }
`;