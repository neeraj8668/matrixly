import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import { Container } from "./componenets/ui/Container";
import { UseCasesSection } from "./UseCasesSection/UseCasesSection";
import { Features } from "./componenets/Features";
import { Callout } from "./componenets/Callout/Callout";
import HomeFooter from "./componenets/HomeFooter/HomeFooter";
const Home = () => {
  return (
    <>
      <div className="herowrraper">
        <Navbar />
        <Hero />
      </div>
      <Container>
        <Features />
      </Container>
      <UseCasesSection />
      <Container>
        <Callout />
        <HomeFooter />
      </Container>
    </>
  );
};

export default Home;
