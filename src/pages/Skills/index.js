import { SubTitle } from "../../components/SubTitle";
import { Title, TitleWrapper } from "../../components/Title";
import { Container, Icons, Icon, SkillDiv, SkillsDiv, Text } from "./style";

import CSSIcon from '../../assets/css-3.png';
import DockerIcon from '../../assets/docker.png';
import GitIcon from '../../assets/git.png';
import HTMLIcon from '../../assets/html.png';
import JSIcon from '../../assets/js.png';
import NodeIcon from '../../assets/nodejs.png';
import ReactIcon from '../../assets/react.png';
import ReactNativeIcon from '../../assets/react_native.png';
import ReduxIcon from '../../assets/redux.png';
import TSIcon from '../../assets/typescript.png';

export const MySkills = () => {
    return (
        <Container>
            <TitleWrapper> &lt;<Title>Habilidades</Title>/&gt;</TitleWrapper>
            <SkillsDiv>
                <SkillDiv>
                    <Text>
                        <SubTitle>Iniciando</SubTitle>
                        <p>Novas tecnologias em que recentemente iniciei meus estudos.</p>
                    </Text>
                    <Icons>
                        <Icon src={DockerIcon} alt="Docker Icon" />
                        <Icon src={NodeIcon} alt="Node Icon" />
                        <Icon src={ReactNativeIcon} alt="React Native Icon" />
                        <Icon src={ReduxIcon} alt="Redux Icon" />
                        <Icon src={TSIcon} alt="TS Icon" />
                    </Icons>
                </SkillDiv>
                <hr/>
                <SkillDiv>
                    <Text>
                        <SubTitle>Me aperfeiçoando</SubTitle>
                        <p>Tecnologias que já tenho uma certa experiência e confiança em trabalhar.</p>
                    </Text>
                    <Icons>
                        <Icon src={HTMLIcon} alt="HTML Icon" />
                        <Icon src={CSSIcon} alt="CSS Icon" />
                        <Icon src={JSIcon} alt="Javascript Icon" />
                        <Icon src={ReactIcon} alt="React Icon" />
                        <Icon src={GitIcon} alt="Git Icon" />
                    </Icons>
                </SkillDiv>
            </SkillsDiv>
        </Container>
    )
}