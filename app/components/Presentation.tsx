import Image from 'next/image';

export default function Presentation() {
    return (
        <section id="presentation" className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/background.jpg')" }}>
            <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center w-full">
                    {/* Photo ronde */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start p-4">
                        <Image
                            src="image.svg"
                            alt="Photo de profil"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                    </div>
                    {/* Titre */}
                    <div className="w-full md:w-2/3 text-center md:text-left text-white p-4">
                        <h1 className="text-4xl font-bold">Bonjour, je suis Emerson</h1>
                        <p className="text-lg mt-4">
                            Développeur web passionné avec une expertise en développement Full Stack.
                            J'aime créer des applications web performantes et intuitives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
