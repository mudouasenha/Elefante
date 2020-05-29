import Layout from "../components/Layout/Layout";
import { Title } from "../components/Title/Title";
import { ButtonPrimary, ButtonSecondary } from "../components/Button/Button";

const About = () => (
  <Layout>
    <div>
      <Title> About BitzPrice </Title>
      <ButtonPrimary> Teste Primary </ButtonPrimary>
      <ButtonSecondary> Teste Secondary </ButtonSecondary>
      <p>Application to view Bitcoin prices</p>
    </div>
  </Layout>
);

export default About;
