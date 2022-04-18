import { Container, TextDiv, ImageDiv } from "./style";
import { Title, TitleWrapper } from '../../components/Title';
import { SubTitle } from "../../components/SubTitle";
import perfilPhoto from "../../assets/perfilPhoto.jpeg";

export const AboutMe = () => {
    return (
        <Container>
            <ImageDiv>
                <img src={perfilPhoto} alt="Foto de Perfil"/>
                <TitleWrapper> &lt;<Title>David</Title> Ono/&gt;</TitleWrapper>
            </ImageDiv>
            <TextDiv>
                <SubTitle>SOBRE MIM</SubTitle>
                <h2>
                    Nome: David Hiromi Ono <br/>
                    Idade: 22 Anos <br/>
                    Área de Interesse: Desenvolvimento Web <br/>
                    Curso: 4º Ano Ciência da Computação<br/>
                    Faculdade: FCT - UNESP <br/>
                    Trabalho Atual: Estagiário InovaLab - Inova Prudente. <br/>
                    Cidade: Presidente Prudente/SP <br/>
                </h2>
            </TextDiv>
        </Container>
    )
}