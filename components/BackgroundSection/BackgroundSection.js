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

export const BackgroundSection1 = () => (
  <Flex
    backgroundImage="url('/assets/images/bg_blue.svg')"
    backgroundPosition="center"
    height="100%"
    flexDirection="row"
    px={277}
  >
    <Flex
      border="1px solid yellow"
      alignItems="center"
      justifyContent="center"
      width={1}
      m={90}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        width={[0.5, 0.4]}
        border="1px solid"
      >
        <InternTitle mb={35}>Consectetuer adipiscing elit.</InternTitle>
        <SupportingText mb={55}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec
          risus id ipsum tempor pellentesque ut ac massa. Suspendisse ut odio
          sollicitudin, iaculis ex ut, porta turpis. Vivamus ut eros dui. Nam
          imperdiet urna a nisi pretium scelerisque consequat sit amet ipsum.
        </SupportingText>
        <SupportingText p={3}>Lorem ipsum dolor</SupportingText>
        <SupportingText backgroundColor="hsla(40, 100%, 56%, 1)" p={3}>
          Tincidunt ut laoreet
        </SupportingText>
        <SupportingText p={3}>Minin Veniam</SupportingText>
        <SupportingText p={3}>Ullamcorper</SupportingText>
      </Flex>
      <Flex justifyContent="center" alignContent="center" px={30}>
        <Image src="/assets/images/telaApp.png" borderRadius="5%" />
      </Flex>
    </Flex>
  </Flex>
);

export const BackgroundSection2 = () => (
  <Flex
    backgroundImage="url('/assets/images/bg_rosa.svg')"
    backgroundPosition="center"
    backgroundSize="cover"
    flexDirection="row"
    height="100%"
    border="1px solid blue"
    mb={160}
    px={277}
  >
    <Flex
      flexDirection="row"
      alignItems="flex-start"
      border="1px solid red"
      my={90}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        border="1px solid"
        maxWidth="30%"
        mr={100}
      >
        <Image
          src="/assets/images/ilust_sec_1.svg"
          alignSelf="center"
          textAlign="center"
          maxHeight={200}
          maxWidth={300}
          mb={60}
        />
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <CardInternTitle mb={55}>
            Organize, distribua e acompanhe tarefas
          </CardInternTitle>
          <CardSupportingText mb={55}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod egestas porta. Nulla facilisi. Phasellus tristique in est at
            maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
          </CardSupportingText>
          <ButtonSecondary
            backgroundColor="white"
            border="1px solid #151515"
            color="#151515"
          >
            Saiba Mais
          </ButtonSecondary>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        border="1px solid"
        mr={100}
        maxWidth="30%"
      >
        <Image
          src="/assets/images/ilust_sec_2.svg"
          alignSelf="center"
          textAlign="center"
          maxHeight={200}
          maxWidth={400}
          mb={30}
        />
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <CardInternTitle mb={55}>
            Saiba onde estão os gargalos de produtividade
          </CardInternTitle>
          <CardSupportingText mb={55}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod egestas porta. Nulla facilisi. Phasellus tristique in est at
            maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
          </CardSupportingText>
          <ButtonSecondary
            backgroundColor="white"
            border="1px solid #151515"
            color="#151515"
          >
            Saiba Mais
          </ButtonSecondary>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        border="1px solid"
        maxWidth="30%"
      >
        <Image
          src="/assets/images/ilust_sec_3.svg"
          alignSelf="center"
          textAlign="center"
          maxHeight={200}
          maxWidth={300}
          mb={30}
        />
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <CardInternTitle mb={55}>
            Tenha uma visão global e unificada do seu negócio
          </CardInternTitle>
          <CardSupportingText mb={55}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod egestas porta. Nulla facilisi. Phasellus tristique in est at
            maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
          </CardSupportingText>
          <ButtonSecondary
            backgroundColor="white"
            border="1px solid #151515"
            color="#151515"
          >
            Saiba Mais
          </ButtonSecondary>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
