import { Flex } from "../Flex/Flex";
import {
  FooterSectionTitle,
  FooterSection,
  FooterText,
} from "../Typography/Typography";
import { Image } from "../Image/Image";

const Footer = () => (
  <Flex
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
    border="1px solid"
    mx={277}
  >
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width={0.25}
      border="1px solid yellow"
    >
      <Image src="/assets/images/Logo_elefante.svg" height={30} mb={4} />
      <FooterText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
        egestas porta. Nulla facilisi. Phasellus tristique in est at maximus.
        Phasellus tristique in est at maximus. Nostrud quis
      </FooterText>
    </Flex>
    <Flex
      flexDirection="row"
      justifyContent="space-evenly"
      border="1px solid red"
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        border="1px solid"
        py={3}
        mx={3}
      >
        <FooterSectionTitle mb={2}>Soluções</FooterSectionTitle>
        <FooterSection>Marketing & Vendas</FooterSection>
        <FooterSection>Customer Success</FooterSection>
        <FooterSection>Customer Journey</FooterSection>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        border="1px solid"
        py={3}
        mx={3}
      >
        <FooterSectionTitle mb={2}>Legal</FooterSectionTitle>
        <FooterSection>Política anti spam</FooterSection>
        <FooterSection>Política de Privacidade</FooterSection>
        <FooterSection>Denunciar abuso</FooterSection>
        <FooterSection>Termos de uso</FooterSection>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        border="1px solid"
        py={3}
        mx={3}
      >
        <FooterSectionTitle mb={2}>Institucional</FooterSectionTitle>
        <FooterSection>Conheça a equipe</FooterSection>
        <FooterSection>Blog</FooterSection>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        border="1px solid"
        py={3}
        mx={3}
      >
        <FooterSectionTitle mb={2}>Ajuda</FooterSectionTitle>
        <FooterSection>Documentação</FooterSection>
        <FooterSection>Contato</FooterSection>
      </Flex>
    </Flex>
  </Flex>
);

export default Footer;
