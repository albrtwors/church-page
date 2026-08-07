export type Pastor = {
    nombres: string;
    rol: string;
    tone: 'principal' | 'adjunto' | 'sede' | 'pastora';
    descripcion: string;
};

export const pastores: Pastor[] = [
    {
        nombres: 'Pastores [Nombre] y [Nombre]',
        rol: 'Pastores Principales',
        tone: 'principal',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        nombres: 'Pastores [Nombre] y [Nombre]',
        rol: 'Pastores Adjuntos',
        tone: 'adjunto',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        nombres: 'Pastores [Nombre] y [Nombre]',
        rol: 'Pastores Adjuntos',
        tone: 'adjunto',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        nombres: 'Pastores [Nombre] y [Nombre]',
        rol: 'Pastores Principales · Otra Sede',
        tone: 'sede',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        nombres: 'Pastora [Nombre]',
        rol: 'Pastora',
        tone: 'pastora',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];
