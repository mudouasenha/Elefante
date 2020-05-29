import Layout from "../components/Layout/Layout";
import { Flex } from "../components/Flex/Flex";
import Box from "../components/Box/Box";
import { Image } from "../components/Image/Image";
import { Title } from "../components/Title/Title";
import { Text } from "../components/Text/Text";
import { ButtonPrimary } from "../components/Button/Button";
import { flex } from "styled-system";
import { Background } from "../components/Background/Background";

const Index = () => (
  <Layout>
    <Flex mt={[85, 165]} w={1} border="1px solid red" flexDirection="column">
      <Flex
        w={1}
        border="1px solid red"
        alignItems="stretch"
        justifyContent="flex-start"
      >
        <Flex
          flexDirection="column"
          width={[0.6, 0.4]}
          height="100%"
          alignItems="flex-start"
          border="1px solid"
          position="relative"
          flexBasis="auto"
          pb={[100, 240]}
        >
          <Title
            fontFamily="Georgia"
            fontSize={65}
            mb={55}
            color="#151515"
            lineHeight={1.2}
          >
            Trabalhar remoto nunca foi tão produtivo!
          </Title>
          <Text
            fontFamily="Graphik Light"
            fontSize={24}
            mb={55}
            color="#151515"
          >
            Gerencie o tempo do seu time, orquestre as tarefas, automatize
            processos e muito mais.
          </Text>
          <ButtonPrimary>EXPERIMENTE GRÁTIS</ButtonPrimary>
        </Flex>
        <Flex
          border="1px solid red"
          justifyContent="center"
          alignItems="stretch"
          overflow="visible"
          width={[0.4, 0.6]}
        >
          <Image height="100%" src="/assets/images/ilustra_home.svg" />
        </Flex>
      </Flex>
      <Flex
        maxWidth={700}
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
      >
        <Flex
          w={1}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          border="1px solid blue"
          mb={55}
        >
          <Title mb={20} mt={40}>
            Organize tudo por áreas e projetos
          </Title>
          <Text
            fontFamily="Graphik Regular"
            fontSize={16}
            textAlign="center"
            color="#151515"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod egestas porta. Nulla facilisi. Phasellus tristique in est at
            maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
          </Text>
        </Flex>
      </Flex>
      <Flex
        w={1}
        backgroundImage="url('/assets/images/bg_blue.svg')"
        backgroundPosition="center"
        backgroundSize="cover"
        height="100%"
        flexDirection="row"
        px={90}
        py={90}
      >
        <Flex
          border="1px solid yellow"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            width={[0.5, 0.4]}
            border="1px solid"
          >
            <Title fontFamily="Georgia Regular" fontSize={34} mb={35}>
              Consectetuer adipiscing elit.
            </Title>
            <Text
              fontFamily="Graphik Regular"
              fontSize={16}
              lineHeight={1.5}
              mb={55}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec risus id ipsum tempor pellentesque ut ac massa. Suspendisse ut
              odio sollicitudin, iaculis ex ut, porta turpis. Vivamus ut eros
              dui. Nam imperdiet urna a nisi pretium scelerisque consequat sit
              amet ipsum.
            </Text>
            <Text
              p={3}
              fontFamily="Graphik Regular"
              fontSize={16}
              color="#151515"
            >
              Lorem ipsum dolor
            </Text>
            <Text
              lineHeight={1.5}
              fontSize={16}
              backgroundColor="hsla(40, 100%, 56%, 1)"
              color="#151515"
              p={3}
            >
              Tincidunt ut laoreet
            </Text>
            <Text
              p={3}
              fontFamily="Graphik Regular"
              fontSize={16}
              color="#151515"
            >
              Minin Veniam
            </Text>
            <Text
              p={3}
              fontFamily="Graphik Regular"
              fontSize={16}
              color="#151515"
            >
              Ullamcorper
            </Text>
          </Flex>
          <Image
            ml={60}
            src="/assets/images/telaApp.png"
            height="90%"
            borderRadius="3%"
          />
        </Flex>
      </Flex>
    </Flex>
  </Layout>
);

export default Index;
