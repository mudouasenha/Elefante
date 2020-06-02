import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import {
  DescriptionCentered1,
  DescriptionCentered2,
  DescriptionCentered3,
} from "../components/DescriptionCentered/DescriptionCentered";
import {
  BackgroundSection1,
  BackgroundSection2,
} from "../components/BackgroundSection/BackgroundSection";
import HomeTitle from "../components/HomeTitle/HomeTitle";

const Index = () => (
  <Layout>
    <HomeTitle />
    <DescriptionCentered1 />
    <BackgroundSection1 />
    <DescriptionCentered2 />
    <BackgroundSection2 />
    <DescriptionCentered3 />
    <Footer />
  </Layout>
);

// const Index = () => (
//   <Flex>
//     <Layout>
//       <Flex mt={[85, 165]} w={1} border="1px solid red" flexDirection="column">
//         <Flex
//           w={1}
//           border="1px solid red"
//           alignItems="stretch"
//           justifyContent="flex-start"
//         >
//           <Flex
//             flexDirection="column"
//             width={[0.6, 0.4]}
//             height="100%"
//             alignItems="flex-start"
//             border="1px solid"
//             position="relative"
//             flexBasis="auto"
//             pb={[100, 240]}
//           >
//             <MainTitle mb={55}>
//               Trabalhar remoto nunca foi tão produtivo!
//             </MainTitle>
//             <SubTitle mb={55}>
//               Gerencie o tempo do seu time, orquestre as tarefas, automatize
//               processos e muito mais.
//             </SubTitle>
//             <ButtonPrimary>EXPERIMENTE GRÁTIS</ButtonPrimary>
//           </Flex>
//           <Flex
//             border="1px solid red"
//             justifyContent="center"
//             alignItems="stretch"
//             overflow="visible"
//             width={[0.4, 0.6]}
//           >
//             <Image height="100%" src="/assets/images/ilustra_home.svg" />
//           </Flex>
//         </Flex>
//         <Flex
//           maxWidth={700}
//           alignItems="center"
//           justifyContent="center"
//           alignSelf="center"
//         >
//           <Flex
//             w={1}
//             justifyContent="center"
//             alignItems="center"
//             flexDirection="column"
//             border="1px solid blue"
//             mb={55}
//           >
//             <InternTitle mb={20} mt={40}>
//               Organize tudo por áreas e projetos
//             </InternTitle>
//             <SupportingText textAlign="center">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//               euismod egestas porta. Nulla facilisi. Phasellus tristique in est
//               at maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
//             </SupportingText>
//           </Flex>
//         </Flex>
//         <Flex
//           backgroundImage="url('/assets/images/bg_blue.svg')"
//           backgroundPosition="center"
//           backgroundSize="cover"
//           flexDirection="row"
//         >
//           <Flex
//             border="1px solid yellow"
//             alignItems="center"
//             justifyContent="center"
//             width={1}
//             m={90}
//           >
//             <Flex
//               flexDirection="column"
//               justifyContent="flex-start"
//               width={[0.5, 0.4]}
//               border="1px solid"
//             >
//               <InternTitle mb={35}>Consectetuer adipiscing elit.</InternTitle>
//               <SupportingText mb={55}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Curabitur nec risus id ipsum tempor pellentesque ut ac massa.
//                 Suspendisse ut odio sollicitudin, iaculis ex ut, porta turpis.
//                 Vivamus ut eros dui. Nam imperdiet urna a nisi pretium
//                 scelerisque consequat sit amet ipsum.
//               </SupportingText>
//               <SupportingText p={3}>Lorem ipsum dolor</SupportingText>
//               <SupportingText backgroundColor="hsla(40, 100%, 56%, 1)" p={3}>
//                 Tincidunt ut laoreet
//               </SupportingText>
//               <SupportingText p={3}>Minin Veniam</SupportingText>
//               <SupportingText p={3}>Ullamcorper</SupportingText>
//             </Flex>
//             <Flex justifyContent="center" alignContent="center" px={30}>
//               <Image src="/assets/images/telaApp.png" borderRadius="5%" />
//             </Flex>
//           </Flex>
//         </Flex>
//         <Flex
//           alignItems="center"
//           border="solid 1px"
//           py={55}
//           justifyContent="center"
//           flexDirection="column"
//         >
//           <Flex
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             textAlign="center"
//             maxWidth={900}
//             border="solid 1px blue"
//             p={3}
//             mb={55}
//           >
//             <InternTitle mb={3}>
//               Lorem ipsum dolor sit amet, consectetur
//             </InternTitle>
//             <SupportingText>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//               euismod egestas porta. Nulla facilisi. Phasellus tristique in est
//               at maximus. Nullam dignissim tellus quis ipsum lacinia vestibulum.
//             </SupportingText>
//           </Flex>
//           <ButtonPrimary>EXPERIMENTE GRÁTIS</ButtonPrimary>
//           <Flex
//             flexDirection="row"
//             justifyContent="center"
//             alignItems="center"
//             border="1px solid purple"
//             mx={90}
//             mt={55}
//           >
//             <Image src="/assets/images/ilustra_02.svg" width={0.5} mr={55} />
//             <Flex
//               flexDirection="column"
//               justifyContent="center"
//               alignItems="flex-start"
//               width={0.5}
//             >
//               <InternTitle mb={50}>Distribua e acompanhe tarefas</InternTitle>
//               <SupportingText mb={50}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//                 euismod egestas porta. Nulla facilisi. Phasellus tristique in
//                 est at maximus. Nullam dignissim tellus quis ipsum lacinia
//                 vestibulum.
//               </SupportingText>
//               <ButtonSecondary border="1px solid #ff4081" color="#151515">
//                 Saiba Mais
//               </ButtonSecondary>
//             </Flex>
//           </Flex>
//           <Flex
//             flexDirection="row"
//             alignItems="flex-start"
//             border="1px solid purple"
//             mx={90}
//             mt={140}
//           >
//             <Flex
//               flexDirection="column"
//               justifyContent="flex-start"
//               alignItems="flex-start"
//               ml={55}
//               width={0.5}
//             >
//               <InternTitle mb={50}>
//                 Veja em tempo real o progresso das atividades
//               </InternTitle>
//               <SupportingText mb={50}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//                 euismod egestas porta. Nulla facilisi. Phasellus tristique in
//                 est at maximus. Nullam dignissim tellus quis ipsum lacinia
//                 vestibulum.
//               </SupportingText>
//               <ButtonSecondary border="1px solid #ff4081" color="#151515">
//                 Saiba Mais
//               </ButtonSecondary>
//             </Flex>
//             <Image src="/assets/images/ilustra_03.svg" width={0.4} ml={55} />
//           </Flex>
//         </Flex>
//         <Flex
//           backgroundImage="url('/assets/images/bg_rosa.svg')"
//           backgroundPosition="center"
//           backgroundSize="cover"
//           flexDirection="row"
//           border="1px solid blue"
//           mb={160}
//         >
//           <Flex
//             flexDirection="row"
//             alignItems="flex-start"
//             justifyContent="space-evenly"
//             border="1px solid red"
//             my={90}
//           >
//             <Flex
//               flexDirection="column"
//               alignItems="center"
//               border="1px solid"
//               mr={100}
//             >
//               <Image
//                 src="/assets/images/ilust_sec_1.svg"
//                 alignSelf="center"
//                 textAlign="center"
//                 maxHeight={200}
//                 maxWidth={300}
//                 mb={55}
//               />
//               <Flex
//                 flexDirection="column"
//                 alignItems="flex-start"
//                 justifyContent="flex-start"
//               >
//                 <CardInternTitle mb={55}>
//                   Organize, distribua e acompanhe tarefas
//                 </CardInternTitle>
//                 <CardSupportingText mb={55}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//                   euismod egestas porta. Nulla facilisi. Phasellus tristique in
//                   est at maximus. Nullam dignissim tellus quis ipsum lacinia
//                   vestibulum.
//                 </CardSupportingText>
//                 <ButtonSecondary
//                   backgroundColor="white"
//                   border="1px solid #151515"
//                   color="#151515"
//                 >
//                   Saiba Mais
//                 </ButtonSecondary>
//               </Flex>
//             </Flex>
//             <Flex
//               flexDirection="column"
//               alignItems="center"
//               border="1px solid"
//               mr={100}
//             >
//               <Image
//                 src="/assets/images/ilust_sec_2.svg"
//                 alignSelf="center"
//                 textAlign="center"
//                 maxHeight={200}
//                 maxWidth={400}
//                 mb={30}
//               />
//               <Flex
//                 flexDirection="column"
//                 alignItems="flex-start"
//                 justifyContent="flex-start"
//               >
//                 <CardInternTitle mb={55}>
//                   Saiba onde estão os gargalos de produtividade
//                 </CardInternTitle>
//                 <CardSupportingText mb={55}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//                   euismod egestas porta. Nulla facilisi. Phasellus tristique in
//                   est at maximus. Nullam dignissim tellus quis ipsum lacinia
//                   vestibulum.
//                 </CardSupportingText>
//                 <ButtonSecondary
//                   backgroundColor="white"
//                   border="1px solid #151515"
//                   color="#151515"
//                 >
//                   Saiba Mais
//                 </ButtonSecondary>
//               </Flex>
//             </Flex>
//             <Flex flexDirection="column" alignItems="center" border="1px solid">
//               <Image
//                 src="/assets/images/ilust_sec_3.svg"
//                 alignSelf="center"
//                 textAlign="center"
//                 maxHeight={200}
//                 maxWidth={300}
//                 mb={30}
//               />
//               <Flex
//                 flexDirection="column"
//                 alignItems="flex-start"
//                 justifyContent="flex-start"
//               >
//                 <CardInternTitle mb={55}>
//                   Tenha uma visão global e unificada do seu negócio
//                 </CardInternTitle>
//                 <CardSupportingText mb={55}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//                   euismod egestas porta. Nulla facilisi. Phasellus tristique in
//                   est at maximus. Nullam dignissim tellus quis ipsum lacinia
//                   vestibulum.
//                 </CardSupportingText>
//                 <ButtonSecondary
//                   backgroundColor="white"
//                   border="1px solid #151515"
//                   color="#151515"
//                 >
//                   Saiba Mais
//                 </ButtonSecondary>
//               </Flex>
//             </Flex>
//           </Flex>
//         </Flex>
//         <Flex
//           alignItems="center"
//           border="solid 1px"
//           justifyContent="center"
//           flexDirection="column"
//           mb={120}
//         >
//           <Flex
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             textAlign="center"
//             maxWidth={950}
//             border="solid 1px blue"
//             p={3}
//             mb={55}
//           >
//             <InternTitle mb={3}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit
//             </InternTitle>
//             <SupportingText>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//               euismod egestas porta. Nulla facilisi. Phasellus tristique in est
//               at maximus.
//             </SupportingText>
//           </Flex>
//           <ButtonPrimary>EXPERIMENTE GRÁTIS</ButtonPrimary>
//         </Flex>
//       </Flex>
//     </Layout>
//     <Footer />
//   </Flex>
//);

export default Index;
