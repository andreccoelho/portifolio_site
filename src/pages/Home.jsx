import {
  Navbar,
  Hero,
  About,
  Experience,
  Skills,
  Education,
  Contact
} from '../components/Portfolio';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
};

export default Home;
