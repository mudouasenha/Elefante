import { Flex } from "../Flex/Flex";
import { Image } from "../Image/Image";
import { ButtonPrimary, ButtonSecondary } from "../Button/Button";
import { MainTitle, SubTitle } from "../Typography/Typography";

const HomeTitle = () => (
  <Flex
    w={1}
    border="1px solid red"
    alignItems="stretch"
    justifyContent="flex-start"
    mt={100}
    mx={277}
    px={40}
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
      <MainTitle mb={55}>Trabalhar remoto nunca foi tão produtivo!</MainTitle>
      <SubTitle mb={55}>
        Gerencie o tempo do seu time, orquestre as tarefas, automatize processos
        e muito mais.
      </SubTitle>
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
);

export default HomeTitle;
