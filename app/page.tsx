import AboutSection from './components/AboutSection';
import Container from './components/Container';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </Container>
  );
}
