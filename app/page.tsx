import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Horarios from '@/components/Horarios';
import Ministerios from '@/components/Ministerios';
import MisionVision from '@/components/MisionVision';
import Navbar from '@/components/Navbar';
import Pastores from '@/components/Pastores';
import Ubicacion from '@/components/Ubicacion';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <MisionVision />
            <Pastores />
            <Ministerios />
            <Horarios />
            <Ubicacion />
            <Contacto />
            <Footer />
        </main>
    );
}
