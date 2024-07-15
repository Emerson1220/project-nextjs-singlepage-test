import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: 'Projet 1', description: 'Description du projet 1', image: '/project1.jpg' },
    { id: 2, title: 'Projet 2', description: 'Description du projet 2', image: '/project2.jpg' },
    { id: 3, title: 'Projet 3', description: 'Description du projet 3', image: '/project3.jpg' }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-gray-200 p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
