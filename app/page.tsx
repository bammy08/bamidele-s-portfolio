import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import SkillsCard from '@/components/SkillsCard';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <>
      {/* Navbar Outside Main to Span Full Width */}
      <Navbar />

      <main className="">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsCard />
        </section>

        {/* Approach Section */}
        <section id="approach">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="mt-16 py-6 text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Bamidele. All rights reserved.
        </footer>
      </main>
    </>
  );
}
