export type Horario = {
    dia: string;
    titulo: string;
    hora: string;
    fin: string;
    descripcion: string;
    destacado?: boolean;
    imagenes: string[];
};

export const horarios: Horario[] = [
    {
        dia: 'Cada Domingo',
        titulo: 'Culto Dominical',
        hora: '8:00 AM',
        fin: '10:00 AM',
        descripcion:
            'Un tiempo de alabanza, adoración y enseñanza de la Palabra para toda la familia.',
        destacado: true,
        imagenes: ['', '', '', ''],
    },
    {
        dia: 'Cada Martes',
        titulo: 'Culto de Oración',
        hora: '4:00 PM',
        fin: '5:30 PM',
        descripcion:
            'Nos reunimos para interceder por nuestras familias, nuestra comunidad y nuestra nación.',
        imagenes: ['', '', ''],
    },
    {
        dia: 'Cada Sábado',
        titulo: 'Servicio de Jóvenes',
        hora: '9:00 AM',
        fin: '11:00 AM',
        descripcion:
            'Un espacio fresco y dinámico para que los jóvenes crezcan en su relación con Dios.',
        imagenes: ['', '', ''],
    },
];
