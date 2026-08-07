export type Ministerio = {
    nombre: string;
    icon: 'adoracion' | 'misiones' | 'jovenes' | 'servidores' | 'protocolo' | 'audiovisual' | 'sonido' | 'pastoral' | 'escuela' | 'evangelismo';
    descripcion: string;
    imagenes: string[];
};

export const ministerios: Ministerio[] = [
    {
        nombre: 'Adoración',
        icon: 'adoracion',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', '', '', ''],
    },
    {
        nombre: 'Misiones',
        icon: 'misiones',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', '', ''],
    },
    {
        nombre: 'Jóvenes',
        icon: 'jovenes',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', '', '', ''],
    },
    {
        nombre: 'Servidores',
        icon: 'servidores',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', ''],
    },
    {
        nombre: 'Protocolo',
        icon: 'protocolo',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', '', ''],
    },
    {
        nombre: 'Audiovisual',
        icon: 'audiovisual',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', '', '', ''],
    },
    {
        nombre: 'Sonido',
        icon: 'sonido',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', ''],
    },
    {
        nombre: 'Pastoral',
        icon: 'pastoral',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', '', ''],
    },
    {
        nombre: 'Escuela Dominical',
        icon: 'escuela',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', '', ''],
    },
    {
        nombre: 'Evangelismo',
        icon: 'evangelismo',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        imagenes: ['', '', ''],
    },
];
