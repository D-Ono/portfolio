import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    margin-top: 5rem;
`;

export const CoursesContainer = styled.div`
    width: 90%; 
    height: 300px; 
    display: flex; 
    align-items: flex-end;
    justify-content: center;
    margin: 6rem 0;

    @media (max-width: 700px){
        height: auto;
        flex-direction: column;
        align-items: center;
        hr {
            display: none;
        }
    }
`;

export const CourseDiv = styled.div`
    height: 24rem; 
    width: 23rem; 
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center; 
    background-color: var(--background-div); 
    border-radius: 12px;
    padding: 1rem;
    margin: 1rem;

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

export const CourseInfo = styled.div`
    height: 7.5rem; 
    width: 100%;
    display: flex; 
    justify-content: flex-start; 
    align-items: center; 

    img {
        height: 90px;
        width: 90px;
        margin-right: 2.5rem;
    }
`;

export const MainInfo = styled.div`
    h4 {
        color: var(--text-body);
        line-height: 1.5rem;
    }
`;

export const Description = styled.p`
    color: var(--text-body);
    text-align: justify;
    padding: 5px; 
    line-height: 1.25rem;
`;

export const Techs = styled.div`
    display: flex; 

    img {
        height: 50px;
        width: 50px;
        margin: 25px 10px;
    }
`;