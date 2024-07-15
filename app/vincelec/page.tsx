import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-900 text-white">
            <section className="text-center mb-12">
                <p className="text-xl mb-6">VincElEc</p>
                <Image
                    src="image.svg"
                    alt="Photo de profil"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-6"
                />
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Passionné par le développement web, je crée des applications performantes et intuitives. Découvrez
                    mes projets et compétences ci-dessous.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded-md">Mes Projets</a>
                    <a href="#contact" className="bg-gray-700 text-white px-4 py-2 rounded-md">Contactez-moi</a>
                </div>
            </section>

            <section id="presentation" className="w-full flex flex-col md:flex-row items-center justify-between mb-12 bg-gray-800 p-6 rounded-lg">
                <div className="md:w-2/3 w-full p-6">
                    <h2 className="text-3xl font-bold mb-6">Qui suis-je ?</h2>
                    <p className="text-lg mb-4">
                        Bonjour, je suis [Votre Nom], un développeur web passionné avec une expertise en développement
                        Full Stack.
                        J'aime créer des applications web performantes et intuitives. Avec des compétences en
                        TypeScript, Python, Java, Spring Boot,
                        et une solide expérience en DevOps, je m'efforce de fournir des solutions de haute qualité.
                    </p>
                    <p className="text-lg">
                        Découvrez mes projets et contactez-moi pour discuter de collaborations potentielles.
                    </p>
                </div>
                <div className="md:w-1/3 w-full flex justify-center md:justify-end p-6">
                    <Image
                        src="image.svg"
                        alt="Photo de profil"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                </div>
            </section>

            <section id="skills" className="w-full max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Compétences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Compétences */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Développement</h3>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Spring Boot</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">DevOps</h3>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>CI/CD</li>
                            <li>Cloud Providers</li>
                            <li>Architecture</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="projects" className="w-full max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Projet 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <Image
                            src="image.svg"
                            alt="Projet 1"
                            width={500}
                            height={300}
                            className="rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Projet 1</h3>
                        <p className="text-gray-400 mb-4">Description de votre projet 1.</p>
                        <a href="#" className="text-blue-500">Voir le projet</a>
                    </div>
                    {/* Projet 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <Image
                            src="image.svg"
                            alt="Projet 2"
                            width={500}
                            height={300}
                            className="rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Projet 2</h3>
                        <p className="text-gray-400 mb-4">Description de votre projet 2.</p>
                        <a href="#" className="text-blue-500">Voir le projet</a>
                    </div>
                    {/* Ajoutez plus de projets si nécessaire */}
                </div>
            </section>

            <section id="contact" className="w-full max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Contact</h2>
                <p className="text-lg mb-6">Vous avez un projet ou une question ? N'hésitez pas à me contacter.</p>
                <a href="mailto:votremail@example.com" className="bg-blue-500 text-white px-4 py-2 rounded-md">Envoyez-moi
                    un email</a>
            </section>
        </main>
    );
}
