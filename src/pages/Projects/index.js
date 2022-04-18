import { Title, TitleWrapper } from "../../components/Title";
import { Container, ProjectContainer, ProjectDiv } from "./style";

export const Project = () => {
    return (
        <Container> 
            <TitleWrapper> &lt;<Title>Projetos Pessoais</Title>/&gt;</TitleWrapper>
            <ProjectContainer>
                <ProjectDiv></ProjectDiv>
                <ProjectDiv></ProjectDiv>
                <ProjectDiv></ProjectDiv>
                <ProjectDiv></ProjectDiv>
            </ProjectContainer>
        </Container>
    )
}