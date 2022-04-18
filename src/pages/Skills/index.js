import { SubTitle } from "../../components/SubTitle";
import { Title, TitleWrapper } from "../../components/Title";
import { Container, Icon, SkillDiv, SkillsDiv } from "./style";

import NodeIcon from '../../assets/node.svg';
import ReactIcon from '../../assets/react.svg';

export const MySkills = () => {
    return (
        <Container>
            <TitleWrapper> &lt;<Title>Habilidades</Title>/&gt;</TitleWrapper>
            <SkillsDiv>
                <SkillDiv>
                    <Icon src={ReactIcon} alt="React Icon"/>
                    <SubTitle>React</SubTitle>
                </SkillDiv>
                <hr/>
                <SkillDiv>
                    <Icon src={ReactIcon} alt="React Icon"/>
                    <SubTitle>React Native</SubTitle>
                </SkillDiv>
                <hr/>
                <SkillDiv>
                   <Icon src={NodeIcon} alt="Node Icon" />
                    <SubTitle>Node.JS</SubTitle>
                </SkillDiv>
            </SkillsDiv>
            <SkillsDiv>
                <SkillDiv>
                    <Icon src={ReactIcon} alt="React Icon"/>
                    <SubTitle>Git</SubTitle>
                </SkillDiv>
                <hr/>
                <SkillDiv>
                    <Icon src={ReactIcon} alt="React Icon"/>
                    <SubTitle>React Native</SubTitle>
                </SkillDiv>
                <hr/>
                <SkillDiv>
                   <Icon src={NodeIcon} alt="Node Icon" />
                    <SubTitle>Node.JS</SubTitle>
                </SkillDiv>
            </SkillsDiv>
        </Container>
    )
}