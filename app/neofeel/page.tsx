import Head from 'next/head';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <div className="bg-gray-100 text-gray-900">
            <Head>
                <title>Portfolio de [Votre Nom]</title>
                <meta name="description" content="Portfolio de développeur de [Votre Nom]" />
            </Head>

            <Header />
            <main>
                <Presentation />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}
