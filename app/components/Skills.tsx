import React from 'react';

const skills = [
    { skill: 'DevOps', icon: '🛠️', level: 4 },
    { skill: 'TypeScript', icon: '📜', level: 5 },
    { skill: 'Python', icon: '🐍', level: 3 },
    { skill: 'Java', icon: '☕', level: 4 },
    { skill: 'Spring Boot', icon: '🌱', level: 3 },
    { skill: 'CI/CD', icon: '🚀', level: 4 },
    { skill: 'Cloud Provider', icon: '☁️', level: 3 },
    { skill: 'Architecture', icon: '🏛️', level: 4 }
];

export default function Skills() {
    return (
        <section id="skills" className="w-full py-20 bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Compétences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl mr-2">{item.icon}</span>
                                <span className="font-bold">{item.skill}</span>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        Niveau {item.level}/5
                                    </span>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                    <div
                                        style={{ width: `${item.level * 20}%` }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                    ></div>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Description de la compétence ou autres détails peuvent être ajoutés ici.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
