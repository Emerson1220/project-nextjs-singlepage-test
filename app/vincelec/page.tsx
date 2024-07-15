import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center p-6 bg-gray-100 text-gray-900">
            {/* Section d'accueil */}
            <section className="w-full bg-blue-600 text-white p-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Bienvenue chez [Nom de l'Artisan]</h1>
                <p className="text-xl mb-6">Votre électricien de confiance pour tous vos travaux d'électricité</p>
                <Image
                    src="image.svg"
                    alt="Électricien en action"
                    width={600}
                    height={400}
                    className="mx-auto rounded-lg"
                />
            </section>

            {/* Section des services */}
            <section className="w-full max-w-6xl mx-auto my-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Nos Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Installation Électrique</h3>
                        <p className="text-gray-700">Installation complète de systèmes électriques dans les bâtiments résidentiels et commerciaux.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Réparation et Maintenance</h3>
                        <p className="text-gray-700">Réparation et maintenance de systèmes électriques existants pour assurer leur bon fonctionnement.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Mise aux Normes</h3>
                        <p className="text-gray-700">Mise aux normes de vos installations électriques pour garantir votre sécurité et conformité.</p>
                    </div>
                </div>
            </section>

            {/* Galerie de travaux réalisés */}
            <section className="w-full max-w-6xl mx-auto my-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Galerie de Travaux Réalisés</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <Image
                            src="image.svg"
                            alt="Travail 1"
                            width={500}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <Image
                            src="/image.svg"
                            alt="Travail 2"
                            width={500}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <Image
                            src="image.svg"
                            alt="Travail 3"
                            width={500}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                    {/* Ajoutez plus de travaux si nécessaire */}
                </div>
            </section>

            {/* Section du périmètre géographique */}
            <section className="w-full max-w-6xl mx-auto my-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Périmètre Géographique Desservi</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-lg mb-4">
                        Nous intervenons dans les régions suivantes pour tous vos travaux d'électricité :
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Ville 1</li>
                        <li>Ville 2</li>
                        <li>Ville 3</li>
                        <li>Région 1</li>
                        <li>Région 2</li>
                    </ul>
                    <p className="text-lg mt-4">
                        Si vous avez des questions concernant notre zone d'intervention, n'hésitez pas à nous contacter.
                    </p>
                </div>
            </section>

            {/* Section de contact */}
            <section className="w-full bg-blue-600 text-white p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Contactez-Nous</h2>
                <p className="text-lg mb-6">Pour toute demande de devis ou d'informations, n'hésitez pas à nous contacter.</p>
                <a href="mailto:votremail@example.com" className="bg-white text-blue-600 px-4 py-2 rounded-md">Envoyez-nous un email</a>
            </section>
        </main>
    );
}
