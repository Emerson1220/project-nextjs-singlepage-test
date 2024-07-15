import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Presentation() {
    return (
        <section id="presentation" className="w-full bg-white py-20 flex items-center justify-center relative pt-24">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
                <motion.div
                    className="md:w-2/3 w-full p-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl font-bold mb-4">Bonjour, je suis [Votre Nom]</h1>
                    <p className="text-lg mb-4">
                        Développeur web passionné avec une expertise en développement Full Stack.
                        J'aime créer des applications web performantes et intuitives.
                    </p>
                    <p className="text-lg">
                        Avec des compétences en TypeScript, Python, Java, Spring Boot, et une solide expérience en DevOps,
                        je m'efforce de fournir des solutions de haute qualité.
                    </p>
                </motion.div>
                <motion.div
                    className="md:w-1/3 w-full flex justify-center md:justify-end p-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/profile.jpg"
                        alt="Photo de profil"
                        width={300}
                        height={300}
                        className="rounded-full shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
}
