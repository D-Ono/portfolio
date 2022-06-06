import { Title, TitleWrapper } from "../../components/Title";
import { SubTitle } from "../../components/SubTitle";
import { Button, Container, Description, ProjectContainer, ProjectDiv, ProjectInfo,  } from "./style";

export const Project = () => {
    return (
        <Container> 
            <TitleWrapper> &lt;<Title>Projetos Pessoais</Title>/&gt;</TitleWrapper>
            <ProjectContainer>
                <ProjectDiv>
                        <SubTitle>Doakid</SubTitle>
                        <h4>
                            Projeto desenvolvido na disciplina de Banco de Dados 
                        </h4>
                        <Description>
                            O Projeto Doakid foi desenvolvido usando React, Node e banco de dados MySQL. O Projeto
                            é basicamente conectar familias carentes que tenham filhos pequenos, assim doações feitas em escolas 
                            são redirecionados para essas familias. 
                        </Description>
                        <Button>
                            <a 
                                href="https://github.com/D-Ono/doakid_front"
                                target="_blank"
                                rel="noreferrer"
                            >   
                                Ver Mais
                            </a>
                        </Button>
                </ProjectDiv>
                <ProjectDiv>
                    <SubTitle>NLW Return</SubTitle>
                        <h4>
                            Projeto desenvolvido na Semana da Rocketseat
                        </h4>
                        <Description>
                            O Projeto é focado em um pequeno widget com diversas interações que permite enviar 
                            problemas, ideias e outros. Ele foi desenvolvido com React, React Native e NodeJS. 
                        </Description>
                        <Button>
                            <a 
                                href="https://github.com/D-Ono/nlw-return"
                                target="_blank"
                                rel="noreferrer"
                            >   
                                Ver Mais
                            </a>
                        </Button>
                </ProjectDiv>
            </ProjectContainer>
        </Container>
    )
}