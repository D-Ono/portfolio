import styled from 'styled-components';

export const Container = styled.div`
    width: 98vw;
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

    @media (max-width: 700px){
        height: auto;
        flex-direction: column;
        align-items: center;
        hr {
            display: none;
        }
    }
`;

export const SkillDiv = styled.div`
    height: 300px; 
    width: 40vw; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: space-around;
    background-color: var(--background-div);
    border-radius: 12px;

    p {
        color: var(--text-body);
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

export const Text = styled.div`
    height: 30%;
    display: flex; 
    flex-direction: column; 
    justify-content: space-around;
    align-items: center; 
`;

export const Icons = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
`;

export const Icon = styled.img`
    height: 60px; 
    width: 60px;
    margin: 0px 10px;
`;