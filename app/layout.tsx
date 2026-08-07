import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Playfair_Display } from 'next/font/google';
import './globals.css';

const aleo = localFont({
    src: './fonts/Aleo-VariableFont_wght.ttf',
    variable: '--font-aleo',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Iglesia Comunidad Cristiana para la Familia "El Salvador"',
    description:
        'Iglesia Comunidad Cristiana para la Familia "El Salvador" en Turmero, Estado Aragua. Te esperamos con los brazos abiertos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={`${aleo.variable} ${playfair.variable}`}>
            <body>{children}</body>
        </html>
    );
}
