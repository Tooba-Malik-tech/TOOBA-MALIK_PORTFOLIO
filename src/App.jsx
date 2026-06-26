import React from "react";
import { CustomCursor } from "./componants/CustomCursor";
import { Navbar } from "./componants/Navbar";
// import { ParticlesBackground } from "./componants/ParticlesBackground";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Testimonials } from "./sections/Testimonials";
import IntroAnimation from "./componants/IntroAnimation";

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />
          {/* <ParticlesBackground /> */}
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
