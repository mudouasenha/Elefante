import Layout from "../components/Layout/Layout";
import { Flex } from "../components/Flex/Flex";
import Box from "../components/Box/Box";
import { Image } from "../components/Image/Image";
import { Title } from "../components/Title/Title";
import { Text } from "../components/Text/Text";
import { ButtonPrimary, ButtonSecondary } from "../components/Button/Button";
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
        backgroundImage="url('/assets/images/bg_blue.svg')"
        backgroundPosition="center"
        backgroundSize="cover"
        flexDirection="row"
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
          <Flex justifyContent="center" alignContent="center" px={30}>
            <Image src="/assets/images/telaApp.png" borderRadius="5%" />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        border="solid 1px"
        py={55}
        justifyContent="center"
        flexDirection="column"
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
          <Title fontFamily="Georgia" fontSize={34} color="#151515" mb={3}>
            Lorem ipsum dolor sit amet, consectetur
          </Title>
          <Text fontFamily="Graphik Regular" fontSize={16} color="#151515">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod egestas porta. Nulla facilisi. Phasellus tristique in est at
            maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
          </Text>
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
            <Title
              mb={50}
              fontFamily="Georgia"
              fontSize={34}
              color="#151515"
              lineHeight={1.2}
            >
              Distribua e acompanhe tarefas
            </Title>
            <Text
              mb={50}
              fontFamily="Graphik Regular"
              fontSize={14}
              lineHeight="20px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod egestas porta. Nulla facilisi. Phasellus tristique in est
              at maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
            </Text>
            <ButtonSecondary border="1px solid #ff4081" color="#151515">
              Saiba Mais
            </ButtonSecondary>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="center"
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
            <Title
              mb={50}
              fontFamily="Georgia"
              fontSize={34}
              color="#151515"
              lineHeight={1.2}
            >
              Veja em tempo real o progresso das atividades
            </Title>
            <Text
              mb={50}
              fontFamily="Graphik Regular"
              fontSize={14}
              lineHeight="20px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod egestas porta. Nulla facilisi. Phasellus tristique in est
              at maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
            </Text>
            <ButtonSecondary border="1px solid #ff4081" color="#151515">
              Saiba Mais
            </ButtonSecondary>
          </Flex>
          <Image src="/assets/images/ilustra_03.svg" height="100%" ml={55} />
        </Flex>
      </Flex>
      <Flex
        backgroundImage="url('/assets/images/bg_rosa.svg')"
        backgroundPosition="center"
        backgroundSize="cover"
        flexDirection="row"
        border="1px solid blue"
        mb={160}
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
            mr={100}
          >
            <Image
              src="/assets/images/ilust_sec_1.svg"
              alignSelf="center"
              textAlign="center"
              maxHeight={200}
              maxWidth={300}
              mb={55}
            />
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Text fontFamily="Georgia" fontSize={30} mb={55}>
                Organize, distribua e acompanhe tarefas
              </Text>
              <Text
                fontFamily="Graphik Regular"
                fontSize={16}
                lineHeight={1.5}
                mb={55}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod egestas porta. Nulla facilisi. Phasellus tristique in
                est at maximus. Nullam dignissim tellus quis ipsum lacinia
                vestibulum.
              </Text>
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
              <Text fontFamily="Georgia" fontSize={30} mb={55}>
                Saiba onde estão os gargalos de produtividade
              </Text>
              <Text
                fontFamily="Graphik Regular"
                fontSize={16}
                lineHeight={1.5}
                mb={55}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod egestas porta. Nulla facilisi. Phasellus tristique in
                est at maximus. Nullam dignissim tellus quis ipsum lacinia
                vestibulum.
              </Text>
              <ButtonSecondary
                backgroundColor="white"
                border="1px solid #151515"
                color="#151515"
              >
                Saiba Mais
              </ButtonSecondary>
            </Flex>
          </Flex>
          <Flex flexDirection="column" alignItems="center" border="1px solid">
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
              <Text fontFamily="Georgia" fontSize={30} mb={55}>
                Tenha uma visão global e unificada do seu negócio!
              </Text>
              <Text
                fontFamily="Graphik Regular"
                fontSize={16}
                lineHeight={1.5}
                mb={55}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod egestas porta. Nulla facilisi. Phasellus tristique in
                est at maximus. Nullam dignissim tellus quis ipsum lacinia
                vestibulum.
              </Text>
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
      <Flex
        alignItems="center"
        border="solid 1px"
        justifyContent="center"
        flexDirection="column"
        mb={120}
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
          <Title fontFamily="Georgia" fontSize={34} color="#151515" mb={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Title>
          <Text fontFamily="Graphik Regular" fontSize={16} color="#151515">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod egestas porta. Nulla facilisi. Phasellus tristique in est at
            maximus.
          </Text>
        </Flex>
        <ButtonPrimary>EXPERIMENTE GRÁTIS</ButtonPrimary>
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
        border="1px solid"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width={250}
          border="1px solid yellow"
        >
          <Image src="/assets/images/Logo_elefante.svg" height={30} mb={4} />
          <Text fontFamily="Graphik Light" fontSize={14} lineHeight="22px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod egestas porta. Nulla facilisi. Phasellus tristique in est at
            maximus. Phasellus tristique in est at maximus. Nostrud quis
          </Text>
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
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#151515"
              mb={3}
            >
              Soluções
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Marketing & Vendas
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Customer Success
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Customer Journey
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            border="1px solid"
            py={3}
            mx={3}
          >
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#151515"
              mb={3}
            >
              Legal
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Política anti spam
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Política de Privacidade
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Denunciar abuso
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Termos de uso
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            border="1px solid"
            py={3}
            mx={3}
          >
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#151515"
              mb={3}
            >
              Institucional
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Conheça a equipe
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Blog
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            border="1px solid"
            py={3}
            mx={3}
          >
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#151515"
              mb={3}
            >
              Ajuda
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Documentação
            </Text>
            <Text
              fontFamily="Graphik Light"
              fontSize={14}
              color="#3f8fc6"
              mb={1}
            >
              Contato
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Layout>
);

export default Index;
