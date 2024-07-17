import Image from 'next/image';

const projects = [
    { id: 1, title: 'Projet 1', description: 'Description du projet 1', image: 'image.svg' },
    { id: 2, title: 'Projet 2', description: 'Description du projet 2', image: 'image.svg' },
    { id: 3, title: 'Projet 3', description: 'Description du projet 3', image: 'image.svg' }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                            <div className="relative h-60 md:h-80">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
