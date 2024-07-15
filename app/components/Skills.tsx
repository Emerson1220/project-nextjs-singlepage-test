import { motion } from 'framer-motion';

const skills = [
    { skill: 'DevOps', icon: '🛠️' },
    { skill: 'TypeScript', icon: '📜' },
    { skill: 'Python', icon: '🐍' },
    { skill: 'Java', icon: '☕' },
    { skill: 'Spring Boot', icon: '🌱' },
    { skill: 'CI/CD', icon: '🚀' },
    { skill: 'Cloud Provider', icon: '☁️' },
    { skill: 'Architecture', icon: '🏛️' }
];

export default function Skills() {
    return (
        <section id="skills" className="w-full py-20 bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Compétences</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skills.map(({ skill, icon }) => (
                        <motion.div
                            key={skill}
                            className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-500 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-4xl mr-4">{icon}</span>
                            <span className="text-xl font-bold">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
