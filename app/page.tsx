import AboutSection from './components/AboutSection';
import Container from './components/Container';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import EdSection from './components/EdSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EdSection />
      <ContactSection />
      <Footer />
    </Container>
  );
}
