import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { Flex } from "../Flex/Flex";
import Box from "../Box/Box";

const Layout = (props) => (
  <Box>
    <Head>
      <title>Elefante</title>
    </Head>
    <Box py={10} mx={{ _: 122.5, sm: 122.5, md: 122.5, lg: 122.5, xl: 277 }}>
      <Navbar />
      {props.children}
    </Box>
  </Box>
);

export default Layout;
