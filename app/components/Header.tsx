import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full py-6 bg-gray-900 text-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Mon Portfolio</div>
                <div className="space-x-4">
                    <Link href="#presentation">Présentation</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#projects">Mes projets</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
}
