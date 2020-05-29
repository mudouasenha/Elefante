import Box from "../Box/Box";
import { Image } from "../Image/Image";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { ButtonPrimary } from "../Button/Button";
import { Flex } from "../Flex/Flex";

export const Home1 = () => (
  <Flex>
    <Flex
      w={1}
      border="1px solid red"
      alignItems="stretch"
      justifyContent="flex-start"
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        border="1px solid"
        position="relative"
      >
        <Title fontFamily="Georgia" fontSize={65} mb={55} color="#151515">
          Trabalhar remoto nunca foi tão produtivo!
        </Title>
        <Text fontFamily="Graphik Light" fontSize={24} mb={55} color="#151515">
          Gerencie o tempo do seu time, orquestre as tarefas, automatize
          processos e muito mais.
        </Text>
        <ButtonPrimary>EXPERIMENTE GRÁTIS</ButtonPrimary>
      </Flex>
      <Flex border="1px solid red" justifyContent="center">
        <Image h={1} width={500} src="/assets/images/ilustra_home.svg" />
      </Flex>
    </Flex>
    <Flex maxWidth={700} alignItems="center" justifyContent="center">
      <Flex
        w={1}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
          egestas porta. Nulla facilisi. Phasellus tristique in est at maximus.
          Nullam dignissim tellus quis ipsum lacinia vestibulum.
        </Text>
      </Flex>
    </Flex>
  </Flex>
);
