import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { Flex } from "../Flex/Flex";
import Box from "../Box/Box";

const Layout = (props) => (
  <Box>
    <Head>
      <title>Elefante</title>
    </Head>
    <Box py={10} mx={[122.5, 277]}>
      <Navbar />
      {props.children}
    </Box>
  </Box>
);

export default Layout;
