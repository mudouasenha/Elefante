import Layout from "../components/Layout/Layout";
import { Flex } from "../components/Flex/Flex";
import Box from "../components/Box/Box";
import { Image } from "../components/Image/Image";
import { Title } from "../components/Title/Title";
import { Text } from "../components/Text/Text";
import { ButtonPrimary, ButtonSecondary } from "../components/Button/Button";
import { flex } from "styled-system";
import { Background } from "../components/Background/Background";

const Teste = () => (
  <Flex w={1}>
    <Flex
      backgroundImage="url('/assets/images/bg_rosa.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
      flexDirection="row"
      border="1px solid blue"
    >
      <Flex
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-evenly"
        border="1px solid red"
        my={90}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          border="1px solid"
          mr={50}
        >
          <Image
            src="/assets/images/ilust_sec_1.svg"
            alignSelf="center"
            textAlign="center"
            width={0.6}
            mb={55}
          />
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Title fontFamily="Georgia" fontSize={30} mb={55}>
              Organize, distribua e acompanhe tarefas
            </Title>
            <Text
              fontFamily="Graphik Regular"
              fontSize={16}
              lineHeight={1.5}
              mb={55}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod egestas porta. Nulla facilisi. Phasellus tristique in est
              at maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
            </Text>
            <ButtonSecondary backgroundColor="white" border="1px solid #151515">
              Saiba Mais
            </ButtonSecondary>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          border="1px solid"
          mr={40}
        >
          <Image
            src="/assets/images/ilust_sec_1.svg"
            alignSelf="center"
            mb={55}
          />
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Title fontFamily="Georgia" fontSize={30} my={55}>
              Organize, distribua e acompanhe tarefas
            </Title>
            <Text
              fontFamily="Graphik Regular"
              fontSize={16}
              lineHeight={1.5}
              mb={55}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod egestas porta. Nulla facilisi. Phasellus tristique in est
              at maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
            </Text>
            <ButtonSecondary backgroundColor="white" border="1px solid #151515">
              Saiba Mais
            </ButtonSecondary>
          </Flex>
        </Flex>
        <Flex flexDirection="column" alignItems="center" border="1px solid">
          <Image
            src="/assets/images/ilust_sec_1.svg"
            alignSelf="center"
            mb={55}
          />
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Title fontFamily="Georgia" fontSize={30} my={55}>
              Organize, distribua e acompanhe tarefas
            </Title>
            <Text
              fontFamily="Graphik Regular"
              fontSize={16}
              lineHeight={1.5}
              mb={55}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod egestas porta. Nulla facilisi. Phasellus tristique in est
              at maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
            </Text>
            <ButtonSecondary backgroundColor="white" border="1px solid #151515">
              Saiba Mais
            </ButtonSecondary>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default Teste;
