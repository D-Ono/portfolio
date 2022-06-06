import { Title, TitleWrapper } from "../../components/Title";
import { SubTitle } from "../../components/SubTitle";
import { Container, CoursesContainer, CourseDiv, CourseInfo, Description, MainInfo, Techs } from "./style";

import B7WebIcon from '../../assets/B7Web.png';
import GitIcon from '../../assets/git.png';
import NodeIcon from '../../assets/nodejs.png';
import ReactIcon from '../../assets/react.png';
import ReactNativeIcon from '../../assets/react_native.png';
import RocketseatIcon from '../../assets/rocketseat.png';
import TSIcon from '../../assets/typescript.png';

export const Courses = () => {
    return (
        <Container> 
            <TitleWrapper> &lt;<Title>Cursos</Title>/&gt;</TitleWrapper>
            <CoursesContainer>
                <CourseDiv>
                    <CourseInfo>
                        <img src={B7WebIcon} alt="Rocketseat Icon"/>
                        <MainInfo>
                            <SubTitle>B7-Web</SubTitle>
                            <br/>
                            <h4>
                                Curso: FullStack  <br/>
                                Inicio: Fevereiro/2022 
                            </h4>
                        </MainInfo>
                    </CourseInfo>
                    <Description>
                        O curso B7-Web tem o objetivo de ensinar diversas tecnologias focado no desenvolvimento mobile e web,
                        como React, React Native, NextJS, PHP, Node, entre outros. 
                        Tudo isso ensinado pelo Professor Bonieky Lacerda.
                    </Description>
                    <Techs>
                        <img src={GitIcon} alt="Git Icon" width={"45px"} height={"45px"}/>
                        <img src={ReactIcon} alt="React Icon" width={"45px"} height={"45px"}/>
                        <img src={NodeIcon} alt="Node Icon" width={"45px"} height={"45px"}/>
                        <img src={TSIcon} alt="TS Icon" width={"45px"} height={"45px"}/>
                    </Techs>
                </CourseDiv>
                <CourseDiv>
                    <CourseInfo>
                        <img src={RocketseatIcon} alt="Rocketseat Icon"/>
                        <MainInfo>
                            <SubTitle>Rocketseat</SubTitle>
                            <br/>
                            <h4>
                                Curso: Ignite <br/>
                                Inicio: Abril/2022 
                            </h4>
                        </MainInfo>
                    </CourseInfo>
                    <Description>
                        O curso Ignite da Rocketseat é focado em 3 tecnologias: React Native, React e NodeJS. 
                        Tendo diversos projetos e desafios nas tecnologias. 
                        Além de ter excelentes professores como Diego Fernades, Rodrigo Gonçalves e Daniele Evangelista.
                    </Description>
                    <Techs>
                        <img src={ReactIcon} alt="React Icon" width={"45px"} height={"45px"}/>
                        <img src={ReactNativeIcon} alt="React Native Icon" width={"45px"} height={"45px"}/>
                        <img src={NodeIcon} alt="Node Icon" width={"45px"} height={"45px"}/>
                    </Techs>
                </CourseDiv>
            </CoursesContainer>
        </Container>
    )
}