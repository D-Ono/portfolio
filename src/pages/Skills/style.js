import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding: 3rem; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
`;

export const SkillsDiv = styled.div`
    height: 300px; 
    width: 100%;
    display:flex;
    justify-content: space-around;
    margin-bottom: 2rem; 
    hr {
        border: 1px solid;
        color: var(--gray);
    }
`;

export const SkillDiv = styled.div`
    height: 300px; 
    width: 25vw; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    background-color: var(--background-div);
    border-radius: 12px;
`;

export const Icon = styled.img`
    width: 80px; 
    height: 80px; 
`;