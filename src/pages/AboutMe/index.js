import { Button, Container, TextDiv, ImageDiv } from "./style";
import { Title, TitleWrapper } from '../../components/Title';
import perfilPhoto from "../../assets/perfilPhoto.jpeg";

export const AboutMe = () => {
    return (
        <Container>
            <ImageDiv>
                <img src={perfilPhoto} alt="Foto de Perfil"/>
                <TitleWrapper> &lt;<Title>David</Title> Ono/&gt;</TitleWrapper>
            </ImageDiv>
            <TextDiv>
                <h4>
                    <span>Nome:</span> David Hiromi Ono <br/>
                    <span>Idade:</span> 22 Anos <br/>
                    <span>Área de Interesse:</span> Desenvolvimento Web - Front End <br/>
                    <span>Curso:</span> 4º Ano Ciência da Computação<br/>
                    <span>Faculdade:</span> FCT - UNESP <br/>
                    <span>Trabalho Atual:</span> Estagiário InovaLab - Inova Prudente. <br/>
                    <span>Cidade:</span> Presidente Prudente/SP <br/>
                </h4>
                <Button>
                    <a 
                        href="https://drive.google.com/drive/folders/1-nzVrA3LxYVYzsTkkji4RfSiDayZaSm5?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >   
                        Currículo
                    </a>
                </Button>
            </TextDiv>
        </Container>
    )
}