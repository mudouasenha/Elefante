import Link from "next/link";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import { Text } from "../Text/Text";
import { Image } from "../Image/Image";

const NavbarOption = styled.a`
  text-decoration: none;
  border: none;
  padding: 10px 0px;
  min-width: 50px;
  text-align: center;

  font-weight: bold;
  line-height: 18px;
  transition: all 350ms;
  max-height: 18px;

  &:hover {
    border-bottom: 2px solid red;
  }
`;

const Navbar = () => (
  <Flex
    w={1}
    justifyContent="space-between"
    border="1px solid"
    alignItems="center"
  >
    <Flex border="1px solid">
      <Image src="/assets/images/Logo_elefante.svg" height={40} />
    </Flex>
    <Flex
      justifyContent="space-between"
      flexStart="flex-end"
      border="1px solid"
    >
      <Flex border="1px solid" mr={80}>
        <Flex px={3}>
          <Link href="/">
            <NavbarOption>Home</NavbarOption>
          </Link>
        </Flex>
        <Flex px={3}>
          <Link href="/recursos">
            <NavbarOption>Recursos</NavbarOption>
          </Link>
        </Flex>
        <Flex px={3}>
          <Link href="/precos">
            <NavbarOption>Preços</NavbarOption>
          </Link>
        </Flex>
        <Flex px={3}>
          <Link href="/about">
            <NavbarOption>Ajuda</NavbarOption>
          </Link>
        </Flex>
      </Flex>
      <Flex border="1px solid" justify-content="space-between">
        <ButtonPrimary mr={4}>Login</ButtonPrimary>
        <ButtonSecondary>Cadastre-se</ButtonSecondary>
      </Flex>
    </Flex>
  </Flex>
);

export default Navbar;
