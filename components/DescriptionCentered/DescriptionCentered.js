import Layout from "../Layout/Layout";
import { Flex } from "../Flex/Flex";
import Box from "../Box/Box";
import { Image } from "../Image/Image";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import {
  InternTitle,
  MainTitle,
  SubTitle,
  SupportingText,
  CardInternTitle,
  FooterText,
  CardSupportingText,
  FooterSectionTitle,
  FooterSection,
} from "../Typography/Typography";
import { ButtonPrimary, ButtonSecondary } from "../Button/Button";
import { flex } from "styled-system";
import { Background } from "../Background/Background";
import Footer from "../Footer/Footer";

export const DescriptionCentered1 = () => (
  <Flex
    alignItems="center"
    border="solid 1px"
    justifyContent="center"
    flexDirection="column"
    mb={120}
    mx={277}
  >
    <Flex
      maxWidth={700}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      border="solid 1px blue"
      p={3}
      mb={55}
    >
      <InternTitle mb={20} mt={40}>
        Organize tudo por áreas e projetos
      </InternTitle>
      <SupportingText textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
        egestas porta. Nulla facilisi. Phasellus tristique in est at maximus.
        Nullam dignissim tellus quis ipsum lacinia vestibulum.
      </SupportingText>
    </Flex>
    <ButtonPrimary>EXPERIMENTE GRÁTIS</ButtonPrimary>
  </Flex>
);

export const DescriptionCentered2 = () => (
  <Flex
    alignItems="center"
    border="solid 1px"
    py={55}
    justifyContent="center"
    flexDirection="column"
    mx={277}
    px={40}
  >
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      maxWidth={900}
      border="solid 1px blue"
      p={3}
      mb={55}
    >
      <InternTitle mb={3}>Lorem ipsum dolor sit amet, consectetur</InternTitle>
      <SupportingText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
        egestas porta. Nulla facilisi. Phasellus tristique in est at maximus.
        Nullam dignissim tellus quis ipsum lacinia vestibulum.
      </SupportingText>
    </Flex>
    <ButtonPrimary>EXPERIMENTE GRÁTIS</ButtonPrimary>
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      border="1px solid purple"
      mx={90}
      mt={55}
    >
      <Image src="/assets/images/ilustra_02.svg" width={0.5} mr={55} />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        width={0.5}
      >
        <InternTitle mb={50}>Distribua e acompanhe tarefas</InternTitle>
        <SupportingText mb={50}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
          egestas porta. Nulla facilisi. Phasellus tristique in est at maximus.
          Nullam dignissim tellus quis ipsum lacinia vestibulum.
        </SupportingText>
        <ButtonSecondary border="1px solid #ff4081" color="#151515">
          Saiba Mais
        </ButtonSecondary>
      </Flex>
    </Flex>
    <Flex
      flexDirection="row"
      alignItems="flex-start"
      border="1px solid purple"
      mx={90}
      mt={140}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        ml={55}
        width={0.5}
      >
        <InternTitle mb={50}>
          Veja em tempo real o progresso das atividades
        </InternTitle>
        <SupportingText mb={50}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
          egestas porta. Nulla facilisi. Phasellus tristique in est at maximus.
          Nullam dignissim tellus quis ipsum lacinia vestibulum.
        </SupportingText>
        <ButtonSecondary border="1px solid #ff4081" color="#151515">
          Saiba Mais
        </ButtonSecondary>
      </Flex>
      <Image src="/assets/images/ilustra_03.svg" width={0.4} ml={55} />
    </Flex>
  </Flex>
);

export const DescriptionCentered3 = () => (
  <Flex
    alignItems="center"
    border="solid 1px"
    justifyContent="center"
    flexDirection="column"
    mb={120}
    mx={277}
  >
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      maxWidth={950}
      border="solid 1px blue"
      p={3}
      mb={55}
    >
      <InternTitle mb={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </InternTitle>
      <SupportingText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
        egestas porta. Nulla facilisi. Phasellus tristique in est at maximus.
      </SupportingText>
    </Flex>
    <ButtonPrimary>EXPERIMENTE GRÁTIS</ButtonPrimary>
  </Flex>
);
