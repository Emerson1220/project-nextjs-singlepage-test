import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="w-full py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Contactez-moi</h2>
                <motion.form
                    className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg mb-2">Nom</label>
                        <input type="text" id="name" className="w-full p-3 rounded-lg bg-gray-700 text-white" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg mb-2">Email</label>
                        <input type="email" id="email" className="w-full p-3 rounded-lg bg-gray-700 text-white" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-lg mb-2">Message</label>
                        <textarea id="message" className="w-full p-3 rounded-lg bg-gray-700 text-white rows=4 "></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg">Envoyer</button>
                </motion.form>
            </div>
        </section>
    );
}
